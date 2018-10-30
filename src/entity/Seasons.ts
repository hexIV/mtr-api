import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId, BaseEntity} from "typeorm";
import {Driverstablepoints} from "./Driverstablepoints";
import {Horsestablepoints} from "./Horsestablepoints";
import {Horsestablewinnings} from "./Horsestablewinnings";
import {Meetings} from "./Meetings";


@Entity("seasons", {schema:"mtr"} )
export class Seasons {    
    @PrimaryGeneratedColumn({ 
        name:"id"
    })
    id: number;  

    @Column("int", { 
        nullable: false,
        name:"year"
    })
    year:number;
        
    @Column("tinyint", { 
        nullable: false,
        width: 1,
        name: "is_current"
    })
    isCurrent: boolean;
   
    @OneToMany(type=> Driverstablepoints, Driverstablepoints => Driverstablepoints.Season, { onDelete: 'CASCADE' ,onUpdate: 'CASCADE' })
    driversPoints: Driverstablepoints[];
   
    @OneToMany(type=> Horsestablepoints, Horsestablepoints => Horsestablepoints.Season, { onDelete: 'CASCADE' ,onUpdate: 'CASCADE' })
    horsesPoints: Horsestablepoints[];
   
    @OneToMany(type=> Horsestablewinnings, Horsestablewinnings => Horsestablewinnings.Season, { onDelete: 'CASCADE' ,onUpdate: 'CASCADE' })
    horsesWinnings: Horsestablewinnings[];
   
    @OneToMany(type=> Meetings, Meetings => Meetings.season, { onDelete: 'CASCADE' ,onUpdate: 'CASCADE' })
    meetings: Meetings[];
}
