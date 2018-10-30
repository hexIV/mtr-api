import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {Races} from "./Races";


@Entity("flatraceresults",{schema:"mtr"})
@Index("Foreign",["Race",])
export class Flatraceresults {

    @PrimaryGeneratedColumn({ 
        name:"flatraceresult_id"
        })
    FlatraceresultId:number;
        

    @Column("int",{ 
        nullable:false,
        name:"participant_no"
        })
    ParticipantNo:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:30,
        name:"horse_name"
        })
    HorseName:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:8,
        name:"weight"
        })
    Weight:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:35,
        name:"driver_name"
        })
    DriverName:string;
        

    @Column("int",{ 
        nullable:false,
        name:"finalposition"
        })
    Finalposition:number;
        

   
    @ManyToOne(type=>Races, Races=>Races.Flatraceresultss,{  nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'raceid'})
    Race:Races | null;

}
