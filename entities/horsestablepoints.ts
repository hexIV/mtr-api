import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {horses} from "./horses";
import {seasons} from "./seasons";


@Entity("horsestablepoints",{schema:"mtr"})
@Index("Foreign",["horse",])
@Index("Foreign2",["season",])
export class horsestablepoints {

    @PrimaryGeneratedColumn({ 
        name:"ranking_id"
        })
    rankingId:number;
        

   
    @ManyToOne(type=>horses, horses=>horses.horsestablepointss,{  nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'horse_id'})
    horse:horses | null;


    @Column("int",{ 
        nullable:false,
        name:"horse_points"
        })
    horsePoints:number;
        

   
    @ManyToOne(type=>seasons, seasons=>seasons.horsestablepointss,{  nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'season_id'})
    season:seasons | null;


    @Column("int",{ 
        nullable:false,
        name:"race_id"
        })
    raceId:number;
        
}
