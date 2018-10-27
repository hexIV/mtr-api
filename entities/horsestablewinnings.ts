import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {horses} from "./horses";
import {seasons} from "./seasons";


@Entity("horsestablewinnings",{schema:"mtr"})
@Index("Foreign",["horse",])
@Index("Foreign2",["season",])
export class horsestablewinnings {

    @PrimaryGeneratedColumn({ 
        name:"winning_id"
        })
    winningId:number;
        

   
    @ManyToOne(type=>horses, horses=>horses.horsestablewinningss,{  nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'horse_id'})
    horse:horses | null;


    @Column("double",{ 
        nullable:false,
        precision:22,
        name:"horse_winnings"
        })
    horseWinnings:number;
        

   
    @ManyToOne(type=>seasons, seasons=>seasons.horsestablewinningss,{  nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'season_id'})
    season:seasons | null;


    @Column("int",{ 
        nullable:false,
        name:"race_id"
        })
    raceId:number;
        
}
