import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {Driverstablepoints} from "./Driverstablepoints";
import {Raceresults} from "./Raceresults";


@Entity("drivers",{schema:"mtr"})
export class Drivers {

    @PrimaryGeneratedColumn({ 
        name:"driver_id"
        })
    DriverId:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:30,
        name:"driver_fullname"
        })
    DriverFullname:string;
        

   
    @OneToMany(type=>Driverstablepoints, Driverstablepoints=>Driverstablepoints.Driver,{ onDelete: 'CASCADE' ,onUpdate: 'CASCADE' })
    Driverstablepointss:Driverstablepoints[];
    

   
    @OneToMany(type=>Raceresults, Raceresults=>Raceresults.Driver,{ onDelete: 'CASCADE' ,onUpdate: 'CASCADE' })
    Raceresultss:Raceresults[];
    
}
