import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {Horses} from "./Horses";
import {Seasons} from "./Seasons";


@Entity("horsestablepoints",{schema:"mtr"})
@Index("Foreign",["Horse",])
@Index("Foreign2",["Season",])
export class Horsestablepoints {

    @PrimaryGeneratedColumn({ 
        name:"ranking_id"
        })
    RankingId:number;
        

   
    @ManyToOne(type=>Horses, Horses=>Horses.Horsestablepointss,{  nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'horse_id'})
    Horse:Horses | null;


    @Column("int",{ 
        nullable:false,
        name:"horse_points"
        })
    HorsePoints:number;
        

   
    @ManyToOne(type=>Seasons, Seasons=>Seasons.Horsestablepointss,{  nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'season_id'})
    Season:Seasons | null;


    @Column("int",{ 
        nullable:false,
        name:"race_id"
        })
    RaceId:number;
        
}
