import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {races} from "./races";
import {horses} from "./horses";
import {raceresults} from "./raceresults";


@Entity("racehorses",{schema:"mtr"})
@Index("Foreign",["race",])
@Index("Foreign2",["horse",])
export class racehorses {

    @PrimaryGeneratedColumn({ 
        name:"participant_id"
        })
    participantId:number;
        

   
    @ManyToOne(type=>races, races=>races.racehorsess,{  nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'race_id'})
    race:races | null;


   
    @ManyToOne(type=>horses, horses=>horses.racehorsess,{  nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'horse_id'})
    horse:horses | null;


    @Column("int",{ 
        nullable:false,
        name:"participant_no"
        })
    participantNo:number;
        

    @Column("int",{ 
        nullable:false,
        default:"0",
        name:"giveadvantage"
        })
    giveadvantage:number;
        

   
    @OneToMany(type=>raceresults, raceresults=>raceresults.participant,{ onDelete: 'CASCADE' ,onUpdate: 'CASCADE' })
    raceresultss:raceresults[];
    
}
