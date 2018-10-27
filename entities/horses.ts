import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";
import {horsestablepoints} from "./horsestablepoints";
import {horsestablewinnings} from "./horsestablewinnings";
import {racehorses} from "./racehorses";


@Entity("horses",{schema:"mtr"})
export class horses {

    @PrimaryGeneratedColumn({ 
        name:"horse_id"
        })
    horseId:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:20,
        name:"horse_name"
        })
    horseName:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:15,
        name:"horse_country"
        })
    horseCountry:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:30,
        name:"horse_sire"
        })
    horseSire:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:30,
        name:"horse_mare"
        })
    horseMare:string;
        

    @Column("int",{ 
        nullable:false,
        name:"horse_points"
        })
    horsePoints:number;
        

    @Column("int",{ 
        nullable:false,
        name:"horse_winnings"
        })
    horseWinnings:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:10,
        name:"horse_record"
        })
    horseRecord:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:10,
        name:"horse_sex"
        })
    horseSex:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:100,
        name:"horse_owner"
        })
    horseOwner:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"horse_dob"
        })
    horseDob:string;
        

   
    @OneToMany(type=>horsestablepoints, horsestablepoints=>horsestablepoints.horse,{ onDelete: 'CASCADE' ,onUpdate: 'CASCADE' })
    horsestablepointss:horsestablepoints[];
    

   
    @OneToMany(type=>horsestablewinnings, horsestablewinnings=>horsestablewinnings.horse,{ onDelete: 'CASCADE' ,onUpdate: 'CASCADE' })
    horsestablewinningss:horsestablewinnings[];
    

   
    @OneToMany(type=>racehorses, racehorses=>racehorses.horse,{ onDelete: 'CASCADE' ,onUpdate: 'CASCADE' })
    racehorsess:racehorses[];
    
}
