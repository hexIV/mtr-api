import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {driverstablepoints} from "./driverstablepoints";
import {raceresults} from "./raceresults";


@Entity("drivers",{schema:"mtr"})
export class drivers {

    @PrimaryGeneratedColumn({ 
        name:"driver_id"
        })
    driverId:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:30,
        name:"driver_fullname"
        })
    driverFullname:string;
        

   
    @OneToMany(type=>driverstablepoints, driverstablepoints=>driverstablepoints.driver,{ onDelete: 'CASCADE' ,onUpdate: 'CASCADE' })
    driverstablepointss:driverstablepoints[];
    

   
    @OneToMany(type=>raceresults, raceresults=>raceresults.driver,{ onDelete: 'CASCADE' ,onUpdate: 'CASCADE' })
    raceresultss:raceresults[];
    
}
