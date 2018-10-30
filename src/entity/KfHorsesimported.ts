import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("kf_horsesimported",{schema:"mtr"})
export class KfHorsesimported {

    @PrimaryGeneratedColumn({ 
        name:"id"
        })
    Id:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:400,
        name:"name"
        })
    Name:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:400,
        name:"filename"
        })
    Filename:string;
        
}
