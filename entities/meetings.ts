import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {seasons} from "./seasons";


@Entity("meetings",{schema:"mtr"})
@Index("Foreign",["season",])
export class meetings {

    @PrimaryGeneratedColumn({ 
        name:"meeting_id"
        })
    meetingId:number;
        

    @Column("int",{ 
        nullable:false,
        name:"meeting_no"
        })
    meetingNo:number;
        

    @Column("bigint",{ 
        nullable:false,
        name:"meeting_datetime"
        })
    meetingDatetime:string;
        

   
    @ManyToOne(type=>seasons, seasons=>seasons.meetingss,{  nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'season_id'})
    season:seasons | null;

}
