import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {Drivers} from "./Drivers";
import {Seasons} from "./Seasons";


@Entity("driverstablepoints",{schema:"mtr"})
@Index("Foreign",["Driver",])
@Index("Foreign2",["Season",])
export class Driverstablepoints {

    @PrimaryGeneratedColumn({ 
        name:"ranking_id"
        })
    RankingId:number;
        

   
    @ManyToOne(type=>Drivers, Drivers=>Drivers.Driverstablepointss,{  nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'driver_id'})
    Driver:Drivers | null;


    @Column("int",{ 
        nullable:false,
        name:"driver_points"
        })
    DriverPoints:number;
        

   
    @ManyToOne(type=>Seasons, Seasons=>Seasons.driversPoints, { nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'season_id'})
    Season:Seasons | null;


    @Column("int",{ 
        nullable:false,
        name:"race_id"
        })
    RaceId:number;
        
}
