import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {drivers} from "./drivers";
import {seasons} from "./seasons";


@Entity("driverstablepoints",{schema:"mtr"})
@Index("Foreign",["driver",])
@Index("Foreign2",["season",])
export class driverstablepoints {

    @PrimaryGeneratedColumn({ 
        name:"ranking_id"
        })
    rankingId:number;
        

   
    @ManyToOne(type=>drivers, drivers=>drivers.driverstablepointss,{  nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'driver_id'})
    driver:drivers | null;


    @Column("int",{ 
        nullable:false,
        name:"driver_points"
        })
    driverPoints:number;
        

   
    @ManyToOne(type=>seasons, seasons=>seasons.driverstablepointss,{  nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'season_id'})
    season:seasons | null;


    @Column("int",{ 
        nullable:false,
        name:"race_id"
        })
    raceId:number;
        
}
