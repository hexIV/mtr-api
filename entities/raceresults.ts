import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {racehorses} from "./racehorses";
import {drivers} from "./drivers";
import {races} from "./races";


@Entity("raceresults",{schema:"mtr"})
@Index("Foreign",["participant",])
@Index("Foreign2",["driver",])
@Index("Foreign3",["race",])
export class raceresults {

    @PrimaryGeneratedColumn({ 
        name:"result_id"
        })
    resultId:number;
        

   
    @ManyToOne(type=>racehorses, racehorses=>racehorses.raceresultss,{  nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'participant_id'})
    participant:racehorses | null;


   
    @ManyToOne(type=>drivers, drivers=>drivers.raceresultss,{  nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'driver_id'})
    driver:drivers | null;


    @Column("int",{ 
        nullable:false,
        name:"finalposition"
        })
    finalposition:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:10,
        name:"finaltime"
        })
    finaltime:string;
        

   
    @ManyToOne(type=>races, races=>races.raceresultss,{  nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'race_id'})
    race:races | null;

}
