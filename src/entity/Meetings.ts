import {Index,Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import {Seasons} from "./Seasons";

@Entity("meetings", {schema:"mtr"})
@Index("season_id")
export class Meetings {

    @PrimaryGeneratedColumn({ 
        name:"meeting_id"
    })
    MeetingId:number;
        
    @Column("int",{ 
        nullable:false,
        name:"meeting_no"
    })
    MeetingNo:number;
    
    @Column("bigint",{ 
        nullable:false,
        name:"meeting_datetime"
    })
    MeetingDatetime:string;
    
    @ManyToOne(type=> Seasons, season => season.meetings, { nullable:false, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name:'season_id' })
    season : Seasons | null;
}
