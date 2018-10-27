import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("horsesforsale",{schema:"mtr"})
export class horsesforsale {

    @PrimaryGeneratedColumn({ 
        name:"horseforsale_id"
        })
    horseforsaleId:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:50,
        name:"horse_name"
        })
    horseName:string;
        

    @Column("int",{ 
        nullable:false,
        name:"horse_age"
        })
    horseAge:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:40,
        name:"horse_country"
        })
    horseCountry:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:100,
        name:"horse_winnings"
        })
    horseWinnings:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:200,
        name:"horse_record"
        })
    horseRecord:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:50,
        name:"horse_sire"
        })
    horseSire:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:50,
        name:"horse_mare"
        })
    horseMare:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:15,
        name:"horse_sex"
        })
    horseSex:string;
        

    @Column("int",{ 
        nullable:false,
        name:"horse_points"
        })
    horsePoints:number;
        

    @Column("int",{ 
        nullable:false,
        default:"0",
        name:"horse_price"
        })
    horsePrice:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:40,
        name:"contact_mobile"
        })
    contactMobile:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:40,
        name:"contact_telephone"
        })
    contactTelephone:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:40,
        name:"contact_email"
        })
    contactEmail:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:40,
        name:"contact_languages"
        })
    contactLanguages:string;
        

    @Column("bigint",{ 
        nullable:false,
        name:"advert_finish"
        })
    advertFinish:string;
        

    @Column("text",{ 
        nullable:false,
        name:"freetext"
        })
    freetext:string;
        
}
