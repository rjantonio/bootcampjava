## DDL
```sql
CREATE TABLE socio (
  soc_id int unsigned not null auto_increment,
  first_name varchar(50),
  last_name varchar(50),
  address text,
  born_date date,
  registration_date date,
  phone varchar(20), 
  PRIMARY KEY (soc_id)
);

CREATE TABLE cuota ( 
	fee_id int unsigned not null auto_increment,
    fee_name varchar(50),
    PRIMARY KEY (fee_id)
);

CREATE TABLE socio_cuota (
	soc_id int unsigned not null,
    fee_id int unsigned not null,
    quantity int,
    payment_date date,
    state ENUM('Cancelado','Vencido','Pendiente','Pagado'),
    PRIMARY KEY (soc_id, fee_id),
    CONSTRAINT socio_cuota_socio foreign key (soc_id) references socio(soc_id),
    CONSTRAINT socio_cuota_cuota foreign key (fee_id) references cuota(fee_id),
    CONSTRAINT socio_cuota_unique UNIQUE (soc_id, fee_id)
);

CREATE TABLE disciplina (
	dis_id int unsigned not null auto_increment,
    dis_name varchar(50),
    PRIMARY KEY (dis_id)
);

CREATE TABLE socio_disciplina (
	soc_id int unsigned not null,
    dis_id int unsigned not null,
    CONSTRAINT socio_disciplina_socio foreign key (soc_id) references socio(soc_id),
    CONSTRAINT socio_disciplina_disciplina foreign key (dis_id) references disciplina(dis_id),
    CONSTRAINT socio_disciplina_unique UNIQUE (soc_id, dis_id),
    PRIMARY KEY (soc_id, dis_id)
);

CREATE TABLE entrenador (
	tra_id int unsigned not null auto_increment,
    tra_name varchar(50),
    sch_days varchar(50),
    sch_sch text,
    dis_spe int,
    FOREIGN KEY (dis_spe) REFERENCES disciplina(dis_id),
    PRIMARY KEY (tra_id)
);

CREATE TABLE entrenador_disciplina_imparte (
	tra_id int unsigned not null,
    dis_id int unsigned not null,
    foreign key (tra_id) references entrenador(tra_id),
    foreign key (dis_id) references disciplina(dis_id),
    CONSTRAINT entrenador_disciplina_imparte_unique UNIQUE (tra_id, dis_id),
    PRIMARY KEY (tra_id, dis_id)
);

CREATE TABLE evento (
	eve_id int unsigned not null auto_increment,
    eve_name varchar(50),
    eve_descr text,
    eve_date DATETIME,
    eve_place text,
    dis_id int,
    FOREIGN KEY (dis_id) REFERENCES disciplina(dis_id),
    PRIMARY KEY (eve_id)
);

CREATE TABLE evento_entrenador (
	tra_id int unsigned not null,
    eve_id int unsigned not null,
    foreign key (tra) references entrenador(tra_id),
    foreign key (eve_id) references evento(eve_id),
    CONSTRAINT evento_entrenador_unique UNIQUE (tra_id, eve_id),
    PRIMARY KEY (tra_id, eve_id)
);

CREATE TABLE socio_evento_participa (
	soc_id int unsigned not null,
    eve_id int unsigned not null,
    foreign key (soc_id) references socio(soc_id),
    foreign key (eve_id) references evento(eve_id),
    CONSTRAINT socio_evento_participa_unique UNIQUE (soc_id, eve_id),
    PRIMARY KEY (soc_id, eve_id)
);

CREATE TABLE socio_evento_gana (
	soc_id int unsigned not null,
    eve_id int unsigned not null,
    foreign key (soc_id) references socio(soc_id),
    foreign key (eve_id) references evento(eve_id),
    CONSTRAINT socio_evento_participa_unique UNIQUE (soc_id, eve_id),
    PRIMARY KEY (soc_id, eve_id)
);
```