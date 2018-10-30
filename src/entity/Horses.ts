import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {Horsestablepoints} from "./Horsestablepoints";
import {Horsestablewinnings} from "./Horsestablewinnings";
import {Racehorses} from "./Racehorses";


@Entity("horses",{schema:"mtr"})
export class Horses {

    @PrimaryGeneratedColumn({ 
        name:"horse_id"
        })
    HorseId:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:20,
        name:"horse_name"
        })
    HorseName:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:15,
        name:"horse_country"
        })
    HorseCountry:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:30,
        name:"horse_sire"
        })
    HorseSire:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:30,
        name:"horse_mare"
        })
    HorseMare:string;
        

    @Column("int",{ 
        nullable:false,
        name:"horse_points"
        })
    HorsePoints:number;
        

    @Column("int",{ 
        nullable:false,
        name:"horse_winnings"
        })
    HorseWinnings:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:10,
        name:"horse_record"
        })
    HorseRecord:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:10,
        name:"horse_sex"
        })
    HorseSex:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:100,
        name:"horse_owner"
        })
    HorseOwner:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"horse_dob"
        })
    HorseDob:string;
        

   
    @OneToMany(type=>Horsestablepoints, Horsestablepoints=>Horsestablepoints.Horse,{ onDelete: 'CASCADE' ,onUpdate: 'CASCADE' })
    Horsestablepointss:Horsestablepoints[];
    

   
    @OneToMany(type=>Horsestablewinnings, Horsestablewinnings=>Horsestablewinnings.Horse,{ onDelete: 'CASCADE' ,onUpdate: 'CASCADE' })
    Horsestablewinningss:Horsestablewinnings[];
    

   
    @OneToMany(type=>Racehorses, Racehorses=>Racehorses.Horse,{ onDelete: 'CASCADE' ,onUpdate: 'CASCADE' })
    Racehorsess:Racehorses[];
    
}
