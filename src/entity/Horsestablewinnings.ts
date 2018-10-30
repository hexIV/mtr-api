import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {Horses} from "./Horses";
import {Seasons} from "./Seasons";


@Entity("horsestablewinnings",{schema:"mtr"})
@Index("Foreign",["Horse",])
@Index("Foreign2",["Season",])
export class Horsestablewinnings {

    @PrimaryGeneratedColumn({ 
        name:"winning_id"
        })
    WinningId:number;
        

   
    @ManyToOne(type=>Horses, Horses=>Horses.Horsestablewinningss,{  nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'horse_id'})
    Horse:Horses | null;


    @Column("double",{ 
        nullable:false,
        precision:22,
        name:"horse_winnings"
        })
    HorseWinnings:number;
        

   
    @ManyToOne(type=>Seasons, Seasons=>Seasons.Horsestablewinningss,{  nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'season_id'})
    Season:Seasons | null;


    @Column("int",{ 
        nullable:false,
        name:"race_id"
        })
    RaceId:number;
        
}
