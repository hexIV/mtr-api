import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {flatraceresults} from "./flatraceresults";
import {racehorses} from "./racehorses";
import {raceresults} from "./raceresults";


@Entity("races",{schema:"mtr"})
export class races {

    @PrimaryGeneratedColumn({ 
        name:"race_id"
        })
    raceId:number;
        

    @Column("int",{ 
        nullable:false,
        name:"race_no"
        })
    raceNo:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:40,
        name:"race_type"
        })
    raceType:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:200,
        name:"race_class"
        })
    raceClass:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"race_time"
        })
    raceTime:string;
        

    @Column("double",{ 
        nullable:false,
        precision:22,
        name:"race_prize1"
        })
    racePrize1:number;
        

    @Column("double",{ 
        nullable:false,
        precision:22,
        name:"race_prize2"
        })
    racePrize2:number;
        

    @Column("double",{ 
        nullable:false,
        precision:22,
        name:"race_prize3"
        })
    racePrize3:number;
        

    @Column("double",{ 
        nullable:false,
        precision:22,
        name:"race_prize4"
        })
    racePrize4:number;
        

    @Column("double",{ 
        nullable:false,
        default:"0",
        precision:22,
        name:"race_prize5"
        })
    racePrize5:number;
        

    @Column("int",{ 
        nullable:false,
        name:"race_distance"
        })
    raceDistance:number;
        

    @Column("int",{ 
        nullable:false,
        name:"meeting_id"
        })
    meetingId:number;
        

    @Column("int",{ 
        nullable:false,
        name:"race_horsesno"
        })
    raceHorsesno:number;
        

    @Column("tinyint",{ 
        nullable:false,
        width:1,
        default:"0",
        name:"race_status"
        })
    raceStatus:boolean;
        

    @Column("varchar",{ 
        nullable:false,
        length:1000,
        name:"youtube_link"
        })
    youtubeLink:string;
        

   
    @OneToMany(type=>flatraceresults, flatraceresults=>flatraceresults.race,{ onDelete: 'CASCADE' ,onUpdate: 'CASCADE' })
    flatraceresultss:flatraceresults[];
    

   
    @OneToMany(type=>racehorses, racehorses=>racehorses.race,{ onDelete: 'CASCADE' ,onUpdate: 'CASCADE' })
    racehorsess:racehorses[];
    

   
    @OneToMany(type=>raceresults, raceresults=>raceresults.race,{ onDelete: 'CASCADE' ,onUpdate: 'CASCADE' })
    raceresultss:raceresults[];
    
}
