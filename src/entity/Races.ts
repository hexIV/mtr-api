import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {Flatraceresults} from "./Flatraceresults";
import {Racehorses} from "./Racehorses";
import {Raceresults} from "./Raceresults";


@Entity("races",{schema:"mtr"})
export class Races {

    @PrimaryGeneratedColumn({ 
        name:"race_id"
        })
    RaceId:number;
        

    @Column("int",{ 
        nullable:false,
        name:"race_no"
        })
    RaceNo:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:40,
        name:"race_type"
        })
    RaceType:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:200,
        name:"race_class"
        })
    RaceClass:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"race_time"
        })
    RaceTime:string;
        

    @Column("double",{ 
        nullable:false,
        precision:22,
        name:"race_prize1"
        })
    RacePrize1:number;
        

    @Column("double",{ 
        nullable:false,
        precision:22,
        name:"race_prize2"
        })
    RacePrize2:number;
        

    @Column("double",{ 
        nullable:false,
        precision:22,
        name:"race_prize3"
        })
    RacePrize3:number;
        

    @Column("double",{ 
        nullable:false,
        precision:22,
        name:"race_prize4"
        })
    RacePrize4:number;
        

    @Column("double",{ 
        nullable:false,
        default:"0",
        precision:22,
        name:"race_prize5"
        })
    RacePrize5:number;
        

    @Column("int",{ 
        nullable:false,
        name:"race_distance"
        })
    RaceDistance:number;
        

    @Column("int",{ 
        nullable:false,
        name:"meeting_id"
        })
    MeetingId:number;
        

    @Column("int",{ 
        nullable:false,
        name:"race_horsesno"
        })
    RaceHorsesno:number;
        

    @Column("tinyint",{ 
        nullable:false,
        width:1,
        default:"0",
        name:"race_status"
        })
    RaceStatus:boolean;
        

    @Column("varchar",{ 
        nullable:false,
        length:1000,
        name:"youtube_link"
        })
    YoutubeLink:string;
        

   
    @OneToMany(type=>Flatraceresults, Flatraceresults=>Flatraceresults.Race,{ onDelete: 'CASCADE' ,onUpdate: 'CASCADE' })
    Flatraceresultss:Flatraceresults[];
    

   
    @OneToMany(type=>Racehorses, Racehorses=>Racehorses.Race,{ onDelete: 'CASCADE' ,onUpdate: 'CASCADE' })
    Racehorsess:Racehorses[];
    

   
    @OneToMany(type=>Raceresults, Raceresults=>Raceresults.Race,{ onDelete: 'CASCADE' ,onUpdate: 'CASCADE' })
    Raceresultss:Raceresults[];
    
}
