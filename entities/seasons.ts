import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {driverstablepoints} from "./driverstablepoints";
import {horsestablepoints} from "./horsestablepoints";
import {horsestablewinnings} from "./horsestablewinnings";
import {meetings} from "./meetings";


@Entity("seasons",{schema:"mtr"})
export class seasons {

    @PrimaryGeneratedColumn({ 
        name:"season_id"
        })
    seasonId:number;
        

    @Column("int",{ 
        nullable:false,
        name:"season_yr"
        })
    seasonYr:number;
        

    @Column("tinyint",{ 
        nullable:false,
        width:1,
        name:"currentseason"
        })
    currentseason:boolean;
        

   
    @OneToMany(type=>driverstablepoints, driverstablepoints=>driverstablepoints.season,{ onDelete: 'CASCADE' ,onUpdate: 'CASCADE' })
    driverstablepointss:driverstablepoints[];
    

   
    @OneToMany(type=>horsestablepoints, horsestablepoints=>horsestablepoints.season,{ onDelete: 'CASCADE' ,onUpdate: 'CASCADE' })
    horsestablepointss:horsestablepoints[];
    

   
    @OneToMany(type=>horsestablewinnings, horsestablewinnings=>horsestablewinnings.season,{ onDelete: 'CASCADE' ,onUpdate: 'CASCADE' })
    horsestablewinningss:horsestablewinnings[];
    

   
    @OneToMany(type=>meetings, meetings=>meetings.season,{ onDelete: 'CASCADE' ,onUpdate: 'CASCADE' })
    meetingss:meetings[];
    
}
