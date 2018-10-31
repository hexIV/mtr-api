import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId, BaseEntity} from "typeorm";
import {Flatraceresults} from "./Flatraceresults";
import {Racehorses} from "./Racehorses";
import {Raceresults} from "./Raceresults";

@Entity("races", { schema:"mtr" })
export class Races extends BaseEntity {

    @PrimaryGeneratedColumn({ 
        name:"id"
    })
    id:number;

    @Column("int", { 
        nullable:false,
        name:"number"
    })
    number: number;
        
    @Column("varchar", {
        nullable: false,
        length: 40,
        name: "type"
    })
    type: string;

    @Column("varchar", { 
        nullable: false,
        length: 200,
        name: "class"
    })
    class: string;

    @Column("bigint", { 
        nullable:false,
        name:"race_time"
    })
    RaceTime:string;

    @Column("double", {
        nullable: false,
        precision: 22,
        name: "prize1"
    })
    prize1: number;
    
    @Column("double", {
        nullable: false,
        precision: 22,
        name: "prize2"
    })
    prize2: number;

    @Column("double", {
        nullable: false,
        precision: 22,
        name: "prize3"
    })
    prize3: number;

    @Column("double", {
        nullable: false,
        precision: 22,
        name: "prize4"
    })
    prize4: number;

    @Column("double", { 
        nullable: false,
        default: "0",
        precision: 22,
        name: "prize5"
    })
    prize5: number;

    @Column("int", {
        nullable: false,
        name: "distance"
    })
    distance: number;
        
    @Column("int", {
        nullable:false,
        name:"meeting_id"
    })
    meetingId: number;        

    @Column("int", { 
        nullable:false,
        name:"horses_count"
    })
    horsesCount: number;

    @Column("tinyint", { 
        nullable: false,
        width: 1,
        default: "0",
        name:"status"
    })
    status: boolean;
        
    @Column("varchar", { 
        nullable: true,
        length: 1000,
        name: "youtube_link"
    })
    youtubeLink:string;

    @Column("datetime", { 
        nullable: false,
        name:"starts_on"
    })
    startsOn: Date;

   
    @OneToMany(type=>Flatraceresults, Flatraceresults=>Flatraceresults.Race,{ onDelete: 'CASCADE' ,onUpdate: 'CASCADE' })
    Flatraceresultss:Flatraceresults[];
    

   
    @OneToMany(type=>Racehorses, Racehorses=>Racehorses.Race,{ onDelete: 'CASCADE' ,onUpdate: 'CASCADE' })
    Racehorsess:Racehorses[];
    

   
    @OneToMany(type=>Raceresults, Raceresults=>Raceresults.Race,{ onDelete: 'CASCADE' ,onUpdate: 'CASCADE' })
    Raceresultss:Raceresults[];
    
}
