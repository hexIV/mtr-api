import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {races} from "./races";


@Entity("flatraceresults",{schema:"mtr"})
@Index("Foreign",["race",])
export class flatraceresults {

    @PrimaryGeneratedColumn({ 
        name:"flatraceresult_id"
        })
    flatraceresultId:number;
        

    @Column("int",{ 
        nullable:false,
        name:"participant_no"
        })
    participantNo:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:30,
        name:"horse_name"
        })
    horseName:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:8,
        name:"weight"
        })
    weight:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:35,
        name:"driver_name"
        })
    driverName:string;
        

    @Column("int",{ 
        nullable:false,
        name:"finalposition"
        })
    finalposition:number;
        

   
    @ManyToOne(type=>races, races=>races.flatraceresultss,{  nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'raceid'})
    race:races | null;

}
