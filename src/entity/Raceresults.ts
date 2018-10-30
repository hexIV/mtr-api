import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {Racehorses} from "./Racehorses";
import {Drivers} from "./Drivers";
import {Races} from "./Races";


@Entity("raceresults",{schema:"mtr"})
@Index("Foreign",["Participant",])
@Index("Foreign2",["Driver",])
@Index("Foreign3",["Race",])
export class Raceresults {

    @PrimaryGeneratedColumn({ 
        name:"result_id"
        })
    ResultId:number;
        

   
    @ManyToOne(type=>Racehorses, Racehorses=>Racehorses.Raceresultss,{  nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'participant_id'})
    Participant:Racehorses | null;


   
    @ManyToOne(type=>Drivers, Drivers=>Drivers.Raceresultss,{  nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'driver_id'})
    Driver:Drivers | null;


    @Column("int",{ 
        nullable:false,
        name:"finalposition"
        })
    Finalposition:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:10,
        name:"finaltime"
        })
    Finaltime:string;
        

   
    @ManyToOne(type=>Races, Races=>Races.Raceresultss,{  nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'race_id'})
    Race:Races | null;

}
