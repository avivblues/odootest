/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     13/11/2023 01:12:41                          */
/*==============================================================*/


drop table if exists MATERIAL;

drop table if exists MATERIAL_TYPE;

drop table if exists SUPPLIER;

/*==============================================================*/
/* Table: MATERIAL                                              */
/*==============================================================*/
create table MATERIAL
(
   MATERIAL_ID          int not null,
   MATERIAL_CODE        char(8),
   MATERIAL_NAME        varchar(50),
   MATERIAL_TYPE        int,
   MATERIAL_BUY_PRICE   decimal(8,2),
   SUPPLIER_ID          int,
   primary key (MATERIAL_ID)
);

/*==============================================================*/
/* Table: MATERIAL_TYPE                                         */
/*==============================================================*/
create table MATERIAL_TYPE
(
   ID                   int,
   NAME_TYPE            char(10)
);

/*==============================================================*/
/* Table: SUPPLIER                                              */
/*==============================================================*/
create table SUPPLIER
(
   ID                   int not null,
   NAME                 varchar(50),
   ADDRESS              varchar(200),
   PHONE                varchar(20)
);

alter table MATERIAL add constraint FK_RELATIONSHIP_1 foreign key (MATERIAL_TYPE)
      references MATERIAL_TYPE (ID) on delete restrict on update restrict;

alter table MATERIAL add constraint FK_RELATIONSHIP_2 foreign key (SUPPLIER_ID)
      references SUPPLIER (ID) on delete restrict on update restrict;

