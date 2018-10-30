import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("otherracingresults",{schema:"mtr"})
@Index("Foreign",["Raceid",])
export class Otherracingresults {

    @PrimaryGeneratedColumn({ 
        name:"otherraceresult_id"
        })
    OtherraceresultId:number;
        

    @Column("int",{ 
        nullable:false,
        name:"participant_no"
        })
    ParticipantNo:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:30,
        name:"horse_name"
        })
    HorseName:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:120,
        name:"driver_name"
        })
    DriverName:string;
        

    @Column("int",{ 
        nullable:false,
        name:"finalposition"
        })
    Finalposition:number;
        

    @Column("int",{ 
        nullable:false,
        name:"raceid"
        })
    Raceid:number;
        
}
