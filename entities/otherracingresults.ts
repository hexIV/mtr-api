import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("otherracingresults",{schema:"mtr"})
@Index("Foreign",["raceid",])
export class otherracingresults {

    @PrimaryGeneratedColumn({ 
        name:"otherraceresult_id"
        })
    otherraceresultId:number;
        

    @Column("int",{ 
        nullable:false,
        name:"participant_no"
        })
    participantNo:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:30,
        name:"horse_name"
        })
    horseName:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:120,
        name:"driver_name"
        })
    driverName:string;
        

    @Column("int",{ 
        nullable:false,
        name:"finalposition"
        })
    finalposition:number;
        

    @Column("int",{ 
        nullable:false,
        name:"raceid"
        })
    raceid:number;
        
}
