import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {Races} from "./Races";
import {Horses} from "./Horses";
import {Raceresults} from "./Raceresults";


@Entity("racehorses",{schema:"mtr"})
@Index("Foreign",["Race",])
@Index("Foreign2",["Horse",])
export class Racehorses {

    @PrimaryGeneratedColumn({ 
        name:"participant_id"
        })
    ParticipantId:number;
        

   
    @ManyToOne(type=>Races, Races=>Races.Racehorsess,{  nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'race_id'})
    Race:Races | null;


   
    @ManyToOne(type=>Horses, Horses=>Horses.Racehorsess,{  nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'horse_id'})
    Horse:Horses | null;


    @Column("int",{ 
        nullable:false,
        name:"participant_no"
        })
    ParticipantNo:number;
        

    @Column("int",{ 
        nullable:false,
        default:"0",
        name:"giveadvantage"
        })
    Giveadvantage:number;
        

   
    @OneToMany(type=>Raceresults, Raceresults=>Raceresults.Participant,{ onDelete: 'CASCADE' ,onUpdate: 'CASCADE' })
    Raceresultss:Raceresults[];
    
}
