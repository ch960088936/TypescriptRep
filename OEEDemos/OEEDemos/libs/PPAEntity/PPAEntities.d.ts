﻿///<reference path="../JayData/jaydata.d.ts" />

/*//////////////////////////////////////////////////////////////////////////////////////
////// Autogenerated by JaySvcUtil.exe http://JayData.org for more info        /////////
//////                      oData  V2  TypeScript                              /////////
//////////////////////////////////////////////////////////////////////////////////////*/


declare module PPAModel {
  export class MD_CALCUALTION extends $data.Entity {
    constructor();
    constructor(initData: { CALC_ID?: string; NAME?: string; TYPE?: string; DESCRIPTION?: string; PROGRAM?: string; });
    CALC_ID: string;
    NAME: string;
    TYPE: string;
    DESCRIPTION: string;
    PROGRAM: string;
    
  }
  
  export class MD_DOM_VALUE extends $data.Entity {
    constructor();
    constructor(initData: { DOM_VAL_NO?: string; DOM_ID?: string; VALUE?: string; DESCRIPTION?: string; DOM_VAL_POS?: number; MD_DOMAIN?: PPAModel.MD_DOMAIN; });
    DOM_VAL_NO: string;
    DOM_ID: string;
    VALUE: string;
    DESCRIPTION: string;
    DOM_VAL_POS: number;
    MD_DOMAIN: PPAModel.MD_DOMAIN;
    
  }
  
  export class MD_DOMAIN extends $data.Entity {
    constructor();
    constructor(initData: { DOM_ID?: string; DOM_NAME?: string; VALUE_TYPE?: string; RANGE_TYPE?: string; UOM_ID?: string; MD_DOM_VALUE?: PPAModel.MD_DOM_VALUE[]; });
    DOM_ID: string;
    DOM_NAME: string;
    VALUE_TYPE: string;
    RANGE_TYPE: string;
    UOM_ID: string;
    MD_DOM_VALUE: PPAModel.MD_DOM_VALUE[];
    
  }
  
  export class MD_DT_CAUSE extends $data.Entity {
    constructor();
    constructor(initData: { DT_CAU_ID?: string; NAME?: string; DT_CLS_ID?: string; TYPE?: string; DESCRIPTION?: string; MD_DT_CLASSE?: PPAModel.MD_DT_CLASSE; });
    DT_CAU_ID: string;
    NAME: string;
    DT_CLS_ID: string;
    TYPE: string;
    DESCRIPTION: string;
    MD_DT_CLASSE: PPAModel.MD_DT_CLASSE;
    
  }
  
  export class MD_DT_CLASSE extends $data.Entity {
    constructor();
    constructor(initData: { DT_CLS_ID?: string; NAME?: string; DESCRIPTION?: string; MD_DT_CAUSE?: PPAModel.MD_DT_CAUSE[]; });
    DT_CLS_ID: string;
    NAME: string;
    DESCRIPTION: string;
    MD_DT_CAUSE: PPAModel.MD_DT_CAUSE[];
    
  }
  
  export class MD_EQPDT_PAR_TAG extends $data.Entity {
    constructor();
    constructor(initData: { PV_NO?: string; PAR_ID?: string; EVT_NO?: string; PAR_POS?: number; PAR_TYPE?: string; REC_TYPE?: string; PAR_TAG?: string; PM_EQP_DT_EVENT?: PPAModel.PM_EQP_DT_EVENT; });
    PV_NO: string;
    PAR_ID: string;
    EVT_NO: string;
    PAR_POS: number;
    PAR_TYPE: string;
    REC_TYPE: string;
    PAR_TAG: string;
    PM_EQP_DT_EVENT: PPAModel.PM_EQP_DT_EVENT;
    
  }
  
  export class MD_EQPMAT_PAR_TAG extends $data.Entity {
    constructor();
    constructor(initData: { PV_NO?: string; PAR_ID?: string; OBJ_NO?: string; PAR_POS?: number; PAR_TYPE?: string; REC_TYPE?: string; PAR_TAG?: string; PM_EQP_CONSUMPTION?: PPAModel.PM_EQP_CONSUMPTION; });
    PV_NO: string;
    PAR_ID: string;
    OBJ_NO: string;
    PAR_POS: number;
    PAR_TYPE: string;
    REC_TYPE: string;
    PAR_TAG: string;
    PM_EQP_CONSUMPTION: PPAModel.PM_EQP_CONSUMPTION;
    
  }
  
  export class MD_PAR_CATEGORY extends $data.Entity {
    constructor();
    constructor(initData: { PAR_CAT_ID?: string; PAR_CAT_NO?: string; PAR_CAT_NAME?: string; });
    PAR_CAT_ID: string;
    PAR_CAT_NO: string;
    PAR_CAT_NAME: string;
    
  }
  
  export class MD_PAR_CLASSIFICATION extends $data.Entity {
    constructor();
    constructor(initData: { PAR_CLF_NO?: string; PAR_CAT_ID?: string; PAR_ID?: string; PAR_POS?: number; });
    PAR_CLF_NO: string;
    PAR_CAT_ID: string;
    PAR_ID: string;
    PAR_POS: number;
    
  }
  
  export class MD_PARAMETER extends $data.Entity {
    constructor();
    constructor(initData: { PAR_ID?: string; DATA_TYPE?: string; PAR_NO?: string; PAR_NAME?: string; PAR_TYPE?: string; DISPLAY_LEN?: number; DISPLAY_NAME?: string; DOM_ID?: string; UOM_ID?: string; });
    PAR_ID: string;
    DATA_TYPE: string;
    PAR_NO: string;
    PAR_NAME: string;
    PAR_TYPE: string;
    DISPLAY_LEN: number;
    DISPLAY_NAME: string;
    DOM_ID: string;
    UOM_ID: string;
    
  }
  
  export class MD_UNITS_OF_MEASURE extends $data.Entity {
    constructor();
    constructor(initData: { UOM_ID?: string; OBJ_NO?: string; UOM_TEXT?: string; });
    UOM_ID: string;
    OBJ_NO: string;
    UOM_TEXT: string;
    
  }
  
  export class PM_CYC_TEAM extends $data.Entity {
    constructor();
    constructor(initData: { OBJ_NO?: string; SHF_CYC_ID?: string; SHF_ID?: string; CYC_POS?: number; TEAM_ID?: string; });
    OBJ_NO: string;
    SHF_CYC_ID: string;
    SHF_ID: string;
    CYC_POS: number;
    TEAM_ID: string;
    
  }
  
  export class PM_ENG_CONSUMPTION extends $data.Entity {
    constructor();
    constructor(initData: { OBJ_NO?: string; REC_TYPE?: string; ENG_ID_TAG?: string; ENG_QTY_TAG?: string; });
    OBJ_NO: string;
    REC_TYPE: string;
    ENG_ID_TAG: string;
    ENG_QTY_TAG: string;
    
  }
  
  export class PM_EQP_CONSUMPTION extends $data.Entity {
    constructor();
    constructor(initData: { OBJ_NO?: string; EQP_ID?: string; SRC_TAG?: string; CONDITION?: string; BATCH_ID_TAG?: string; CSM_MATID_TAG?: string; CSM_MATQTY_TAG?: string; UOM_ID?: string; MD_EQPMAT_PAR_TAG?: PPAModel.MD_EQPMAT_PAR_TAG[]; PM_EQUIPMENT?: PPAModel.PM_EQUIPMENT; });
    OBJ_NO: string;
    EQP_ID: string;
    SRC_TAG: string;
    CONDITION: string;
    BATCH_ID_TAG: string;
    CSM_MATID_TAG: string;
    CSM_MATQTY_TAG: string;
    UOM_ID: string;
    MD_EQPMAT_PAR_TAG: PPAModel.MD_EQPMAT_PAR_TAG[];
    PM_EQUIPMENT: PPAModel.PM_EQUIPMENT;
    
  }
  
  export class PM_EQP_DT_EVENT extends $data.Entity {
    constructor();
    constructor(initData: { EVT_NO?: string; EQP_ID?: string; EVT_NAME?: string; EVT_TYPE?: string; SRC_TAG?: string; CONDITION?: string; DT_CAU_ID?: string; MD_EQPDT_PAR_TAG?: PPAModel.MD_EQPDT_PAR_TAG[]; PM_EQUIPMENT?: PPAModel.PM_EQUIPMENT; });
    EVT_NO: string;
    EQP_ID: string;
    EVT_NAME: string;
    EVT_TYPE: string;
    SRC_TAG: string;
    CONDITION: string;
    DT_CAU_ID: string;
    MD_EQPDT_PAR_TAG: PPAModel.MD_EQPDT_PAR_TAG[];
    PM_EQUIPMENT: PPAModel.PM_EQUIPMENT;
    
  }
  
  export class PM_EQP_LEVEL extends $data.Entity {
    constructor();
    constructor(initData: { LVL_ID?: string; NAME?: string; PARENT?: string; DESCRIPTION?: string; PM_EQUIPMENT?: PPAModel.PM_EQUIPMENT[]; });
    LVL_ID: string;
    NAME: string;
    PARENT: string;
    DESCRIPTION: string;
    PM_EQUIPMENT: PPAModel.PM_EQUIPMENT[];
    
  }
  
  export class PM_EQP_PERFORMANCE extends $data.Entity {
    constructor();
    constructor(initData: { OBJ_NO?: string; EQP_ID?: string; PER_TYPE?: string; SPAN_UNIT?: string; SPAN?: number; TARGET?: string; ACT_TAG?: string; PM_EQUIPMENT?: PPAModel.PM_EQUIPMENT; });
    OBJ_NO: string;
    EQP_ID: string;
    PER_TYPE: string;
    SPAN_UNIT: string;
    SPAN: number;
    TARGET: string;
    ACT_TAG: string;
    PM_EQUIPMENT: PPAModel.PM_EQUIPMENT;
    
  }
  
  export class PM_EQP_PROPERTY extends $data.Entity {
    constructor();
    constructor(initData: { EQP_PRP_NO?: string; EQP_ID?: string; PAR_ID?: string; PAR_POS?: number; PAR_TYPE?: string; VALUE_TYPE?: string; HIGH_VALUE?: string; LOW_VALUE?: string; RANGE_TYPE?: string; PM_EQUIPMENT?: PPAModel.PM_EQUIPMENT; });
    EQP_PRP_NO: string;
    EQP_ID: string;
    PAR_ID: string;
    PAR_POS: number;
    PAR_TYPE: string;
    VALUE_TYPE: string;
    HIGH_VALUE: string;
    LOW_VALUE: string;
    RANGE_TYPE: string;
    PM_EQUIPMENT: PPAModel.PM_EQUIPMENT;
    
  }
  
  export class PM_EQP_QUALITY extends $data.Entity {
    constructor();
    constructor(initData: { OBJ_NO?: string; EQP_ID?: string; TOTAL_TAG?: string; QUALIFY_TAG?: string; REWORK_TAG?: string; SCRAP_TAG?: string; BATCH_ID_TAG?: string; PM_EQUIPMENT?: PPAModel.PM_EQUIPMENT; });
    OBJ_NO: string;
    EQP_ID: string;
    TOTAL_TAG: string;
    QUALIFY_TAG: string;
    REWORK_TAG: string;
    SCRAP_TAG: string;
    BATCH_ID_TAG: string;
    PM_EQUIPMENT: PPAModel.PM_EQUIPMENT;
    
  }
  
  export class PM_EQUIPMENT extends $data.Entity {
    constructor();
    constructor(initData: { EQP_ID?: string; NAME?: string; STATUS?: string; PARENT?: string; LVL_ID?: string; RT_TAG?: string; PER_CALC_ID?: string; DESCRIPTION?: string; QA_CALC_ID?: string; AVA_CALC_ID?: string; PM_EQP_CONSUMPTION?: PPAModel.PM_EQP_CONSUMPTION[]; PM_EQP_DT_EVENT?: PPAModel.PM_EQP_DT_EVENT[]; PM_EQP_LEVEL?: PPAModel.PM_EQP_LEVEL; PM_EQP_PERFORMANCE?: PPAModel.PM_EQP_PERFORMANCE[]; PM_EQP_PROPERTY?: PPAModel.PM_EQP_PROPERTY[]; PM_EQP_QUALITY?: PPAModel.PM_EQP_QUALITY[]; });
    EQP_ID: string;
    NAME: string;
    STATUS: string;
    PARENT: string;
    LVL_ID: string;
    RT_TAG: string;
    PER_CALC_ID: string;
    DESCRIPTION: string;
    QA_CALC_ID: string;
    AVA_CALC_ID: string;
    PM_EQP_CONSUMPTION: PPAModel.PM_EQP_CONSUMPTION[];
    PM_EQP_DT_EVENT: PPAModel.PM_EQP_DT_EVENT[];
    PM_EQP_LEVEL: PPAModel.PM_EQP_LEVEL;
    PM_EQP_PERFORMANCE: PPAModel.PM_EQP_PERFORMANCE[];
    PM_EQP_PROPERTY: PPAModel.PM_EQP_PROPERTY[];
    PM_EQP_QUALITY: PPAModel.PM_EQP_QUALITY[];
    
  }
  
  export class PM_PER_DETAIL extends $data.Entity {
    constructor();
    constructor(initData: { PDTL_ID?: string; PER_ID?: string; START_TIME?: number; END_TIME?: number; PRD_TYPE?: string; PM_PERIOD?: PPAModel.PM_PERIOD; });
    PDTL_ID: string;
    PER_ID: string;
    START_TIME: number;
    END_TIME: number;
    PRD_TYPE: string;
    PM_PERIOD: PPAModel.PM_PERIOD;
    
  }
  
  export class PM_PERIOD extends $data.Entity {
    constructor();
    constructor(initData: { PER_ID?: string; PER_NAME?: string; SHF_ID?: string; START_TIME?: number; END_TIME?: number; PM_PER_DETAIL?: PPAModel.PM_PER_DETAIL[]; PM_SHIFT?: PPAModel.PM_SHIFT; });
    PER_ID: string;
    PER_NAME: string;
    SHF_ID: string;
    START_TIME: number;
    END_TIME: number;
    PM_PER_DETAIL: PPAModel.PM_PER_DETAIL[];
    PM_SHIFT: PPAModel.PM_SHIFT;
    
  }
  
  export class PM_SH_CYCLE extends $data.Entity {
    constructor();
    constructor(initData: { SHF_CYC_ID?: string; STATUS?: string; SHF_CYC_LEN?: number; START_D?: Date; START_POS?: number; });
    SHF_CYC_ID: string;
    STATUS: string;
    SHF_CYC_LEN: number;
    START_D: Date;
    START_POS: number;
    
  }
  
  export class PM_SHIFT extends $data.Entity {
    constructor();
    constructor(initData: { SHF_ID?: string; SHF_NAME?: string; START_TIME?: number; END_TIME?: number; PM_PERIOD?: PPAModel.PM_PERIOD[]; });
    SHF_ID: string;
    SHF_NAME: string;
    START_TIME: number;
    END_TIME: number;
    PM_PERIOD: PPAModel.PM_PERIOD[];
    
  }
  
  export class PPA_DT_RECORD extends $data.Entity {
    constructor();
    constructor(initData: { REC_NO?: string; EQP_ID?: string; D_RECORD?: Date; DT_START_TIME?: Date; DT_END_TIME?: Date; DT_CAU_ID?: string; PROCESSED?: string; D_UPDATE?: Date; D_CALCULATE?: Date; OPERATOR?: string; PPA_DTR_PARAMETER?: PPAModel.PPA_DTR_PARAMETER[]; });
    REC_NO: string;
    EQP_ID: string;
    D_RECORD: Date;
    DT_START_TIME: Date;
    DT_END_TIME: Date;
    DT_CAU_ID: string;
    PROCESSED: string;
    D_UPDATE: Date;
    D_CALCULATE: Date;
    OPERATOR: string;
    PPA_DTR_PARAMETER: PPAModel.PPA_DTR_PARAMETER[];
    
  }
  
  export class PPA_DTR_PARAMETER extends $data.Entity {
    constructor();
    constructor(initData: { PV_NO?: string; PAR_ID?: string; REC_NO?: string; PAR_POS?: number; PAR_TYPE?: string; VALUE_TYPE?: string; HIGH_VALUE?: string; LOW_VALUE?: string; RANGE_TYPE?: string; PPA_DT_RECORD?: PPAModel.PPA_DT_RECORD; });
    PV_NO: string;
    PAR_ID: string;
    REC_NO: string;
    PAR_POS: number;
    PAR_TYPE: string;
    VALUE_TYPE: string;
    HIGH_VALUE: string;
    LOW_VALUE: string;
    RANGE_TYPE: string;
    PPA_DT_RECORD: PPAModel.PPA_DT_RECORD;
    
  }
  
  export class PPA_ENG_CONSUMPTION extends $data.Entity {
    constructor();
    constructor(initData: { ENGC_NO?: string; D_PRODUCTION?: Date; ENGC_TYPE?: string; SHF_NO?: string; PER_NO?: string; ENG_ID?: string; QUANTITY?: string; });
    ENGC_NO: string;
    D_PRODUCTION: Date;
    ENGC_TYPE: string;
    SHF_NO: string;
    PER_NO: string;
    ENG_ID: string;
    QUANTITY: string;
    
  }
  
  export class PPA_ENGC_RECORD extends $data.Entity {
    constructor();
    constructor(initData: { REC_NO?: string; D_RECORD?: Date; ENGC_TYPE?: string; SHF_NO?: string; PER_NO?: string; BATCH_ID?: string; ENG_ID?: string; QUANTITY?: string; PROCESSED?: string; D_UPDATE?: Date; OPERATOR?: string; });
    REC_NO: string;
    D_RECORD: Date;
    ENGC_TYPE: string;
    SHF_NO: string;
    PER_NO: string;
    BATCH_ID: string;
    ENG_ID: string;
    QUANTITY: string;
    PROCESSED: string;
    D_UPDATE: Date;
    OPERATOR: string;
    
  }
  
  export class PPA_MAT_CONSUMPTION extends $data.Entity {
    constructor();
    constructor(initData: { MATC_NO?: string; CSM_MAT_ID?: string; MAT_NO?: string; QUANTITY?: string; UOM_ID?: string; REMARK?: string; PPA_MATERIAL?: PPAModel.PPA_MATERIAL; });
    MATC_NO: string;
    CSM_MAT_ID: string;
    MAT_NO: string;
    QUANTITY: string;
    UOM_ID: string;
    REMARK: string;
    PPA_MATERIAL: PPAModel.PPA_MATERIAL;
    
  }
  
  export class PPA_MAT_PARAMETER extends $data.Entity {
    constructor();
    constructor(initData: { PV_NO?: string; PAR_ID?: string; MAT_NO?: string; PAR_POS?: number; PAR_TYPE?: string; VALUE_TYPE?: string; HIGH_VALUE?: string; LOW_VALUE?: string; RANGE_TYPE?: string; PPA_MATERIAL?: PPAModel.PPA_MATERIAL; });
    PV_NO: string;
    PAR_ID: string;
    MAT_NO: string;
    PAR_POS: number;
    PAR_TYPE: string;
    VALUE_TYPE: string;
    HIGH_VALUE: string;
    LOW_VALUE: string;
    RANGE_TYPE: string;
    PPA_MATERIAL: PPAModel.PPA_MATERIAL;
    
  }
  
  export class PPA_MAT_STRUCTURE_ELEMENT extends $data.Entity {
    constructor();
    constructor(initData: { MAT_STRE_NO?: string; MAT_STRE_POS?: number; MAT_STRE_TYPE?: string; PRED_MAT_NO?: string; SUCC_MAT_NO?: string; });
    MAT_STRE_NO: string;
    MAT_STRE_POS: number;
    MAT_STRE_TYPE: string;
    PRED_MAT_NO: string;
    SUCC_MAT_NO: string;
    
  }
  
  export class PPA_MATC_RECORD extends $data.Entity {
    constructor();
    constructor(initData: { REC_NO?: string; D_RECORD?: Date; MATC_TYPE?: string; SHF_NO?: string; PER_NO?: string; BATCH_ID?: string; CON_MAT_ID?: string; QUANTITY?: string; PROCESSED?: string; D_UPDATE?: Date; OPERATOR?: string; PPA_MATCR_PARAMETER?: PPAModel.PPA_MATCR_PARAMETER[]; });
    REC_NO: string;
    D_RECORD: Date;
    MATC_TYPE: string;
    SHF_NO: string;
    PER_NO: string;
    BATCH_ID: string;
    CON_MAT_ID: string;
    QUANTITY: string;
    PROCESSED: string;
    D_UPDATE: Date;
    OPERATOR: string;
    PPA_MATCR_PARAMETER: PPAModel.PPA_MATCR_PARAMETER[];
    
  }
  
  export class PPA_MATCR_PARAMETER extends $data.Entity {
    constructor();
    constructor(initData: { PV_NO?: string; PAR_ID?: string; REC_NO?: string; PAR_POS?: number; PAR_TYPE?: string; VALUE_TYPE?: string; HIGH_VALUE?: string; LOW_VALUE?: string; RANGE_TYPE?: string; PPA_MATC_RECORD?: PPAModel.PPA_MATC_RECORD; });
    PV_NO: string;
    PAR_ID: string;
    REC_NO: string;
    PAR_POS: number;
    PAR_TYPE: string;
    VALUE_TYPE: string;
    HIGH_VALUE: string;
    LOW_VALUE: string;
    RANGE_TYPE: string;
    PPA_MATC_RECORD: PPAModel.PPA_MATC_RECORD;
    
  }
  
  export class PPA_MATERIAL extends $data.Entity {
    constructor();
    constructor(initData: { MAT_NO?: string; EXT_MAT_ID?: string; STATUS?: string; D_PRODUCTION?: Date; MAT_CLS_ID?: string; MAT_QTY?: string; UOM_ID?: string; PO_ID?: string; PPA_MAT_CONSUMPTION?: PPAModel.PPA_MAT_CONSUMPTION[]; PPA_MAT_PARAMETER?: PPAModel.PPA_MAT_PARAMETER[]; });
    MAT_NO: string;
    EXT_MAT_ID: string;
    STATUS: string;
    D_PRODUCTION: Date;
    MAT_CLS_ID: string;
    MAT_QTY: string;
    UOM_ID: string;
    PO_ID: string;
    PPA_MAT_CONSUMPTION: PPAModel.PPA_MAT_CONSUMPTION[];
    PPA_MAT_PARAMETER: PPAModel.PPA_MAT_PARAMETER[];
    
  }
  
  export class PPA_OEE_SUMMARY extends $data.Entity {
    constructor();
    constructor(initData: { SUM_NO?: string; EQP_ID?: string; SHF_NO?: string; PER_NO?: string; PER_START_TIME?: Date; PER_END_TIME?: Date; PL_PRD_TIME?: string; ACT_PRD_TIME?: string; SCH_DT_TIME?: string; UNSCH_DT_TIME?: string; UNSCH_DT_CNT?: string; TOTAL_ITEMS?: string; QA_ITEMS?: string; REWORK_ITEMS?: string; SCRAP_ITEMS?: string; OEE_AVA?: string; OEE_PER?: string; OEE_QUA?: string; D_UPDATE?: Date; OEE_COM?: string; });
    SUM_NO: string;
    EQP_ID: string;
    SHF_NO: string;
    PER_NO: string;
    PER_START_TIME: Date;
    PER_END_TIME: Date;
    PL_PRD_TIME: string;
    ACT_PRD_TIME: string;
    SCH_DT_TIME: string;
    UNSCH_DT_TIME: string;
    UNSCH_DT_CNT: string;
    TOTAL_ITEMS: string;
    QA_ITEMS: string;
    REWORK_ITEMS: string;
    SCRAP_ITEMS: string;
    OEE_AVA: string;
    OEE_PER: string;
    OEE_QUA: string;
    D_UPDATE: Date;
    OEE_COM: string;
    
  }
  
  export class PPA_PER_DETAIL extends $data.Entity {
    constructor();
    constructor(initData: { PDTL_NO?: string; PER_NO?: string; START_TIME?: Date; END_TIME?: Date; PRD_TYPE?: string; PPA_PERIOD?: PPAModel.PPA_PERIOD; });
    PDTL_NO: string;
    PER_NO: string;
    START_TIME: Date;
    END_TIME: Date;
    PRD_TYPE: string;
    PPA_PERIOD: PPAModel.PPA_PERIOD;
    
  }
  
  export class PPA_PER_RECORD extends $data.Entity {
    constructor();
    constructor(initData: { REC_NO?: string; EQP_ID?: string; D_RECORD?: Date; REC_START_TIME?: Date; REC_END_TIME?: Date; SHF_NO?: string; PER_NO?: string; BATCH_ID?: string; IDEAL?: string; ACTUAL?: string; PROCESSED?: string; D_UPDATE?: Date; OPERATOR?: string; });
    REC_NO: string;
    EQP_ID: string;
    D_RECORD: Date;
    REC_START_TIME: Date;
    REC_END_TIME: Date;
    SHF_NO: string;
    PER_NO: string;
    BATCH_ID: string;
    IDEAL: string;
    ACTUAL: string;
    PROCESSED: string;
    D_UPDATE: Date;
    OPERATOR: string;
    
  }
  
  export class PPA_PERIOD extends $data.Entity {
    constructor();
    constructor(initData: { PER_NO?: string; PER_ID?: string; SHF_NO?: string; START_TIME?: Date; END_TIME?: Date; PPA_PER_DETAIL?: PPAModel.PPA_PER_DETAIL[]; PPA_SHIFT?: PPAModel.PPA_SHIFT; });
    PER_NO: string;
    PER_ID: string;
    SHF_NO: string;
    START_TIME: Date;
    END_TIME: Date;
    PPA_PER_DETAIL: PPAModel.PPA_PER_DETAIL[];
    PPA_SHIFT: PPAModel.PPA_SHIFT;
    
  }
  
  export class PPA_QA_RECORD extends $data.Entity {
    constructor();
    constructor(initData: { REC_NO?: string; EQP_ID?: string; D_RECORD?: Date; REC_START_TIME?: Date; REC_END_TIME?: Date; SHF_NO?: string; PER_NO?: string; BATCH_ID?: string; TOTAL?: string; REWORK?: string; SCRAP?: string; PROCESSED?: string; D_UPDATE?: Date; OPERATOR?: string; QUALIFY?: string; });
    REC_NO: string;
    EQP_ID: string;
    D_RECORD: Date;
    REC_START_TIME: Date;
    REC_END_TIME: Date;
    SHF_NO: string;
    PER_NO: string;
    BATCH_ID: string;
    TOTAL: string;
    REWORK: string;
    SCRAP: string;
    PROCESSED: string;
    D_UPDATE: Date;
    OPERATOR: string;
    QUALIFY: string;
    
  }
  
  export class PPA_SHIFT extends $data.Entity {
    constructor();
    constructor(initData: { SHF_NO?: string; SHF_ID?: string; START_TIME?: Date; END_TIME?: Date; TEAM_ID?: string; PPA_PERIOD?: PPAModel.PPA_PERIOD[]; });
    SHF_NO: string;
    SHF_ID: string;
    START_TIME: Date;
    END_TIME: Date;
    TEAM_ID: string;
    PPA_PERIOD: PPAModel.PPA_PERIOD[];
    
  }
  
  export class SYS_USER_SESSION extends $data.Entity {
    constructor();
    constructor(initData: { SESSION_NO?: string; TERMINAL_ID?: string; USER_ID?: string; ROLE_ID?: string; SESSION_START_DATE?: Date; SESSION_END_DATE?: Date; });
    SESSION_NO: string;
    TERMINAL_ID: string;
    USER_ID: string;
    ROLE_ID: string;
    SESSION_START_DATE: Date;
    SESSION_END_DATE: Date;
    
  }
  
}

declare module AicTech.PPA.DataModel {
    export class PPAEntities extends $data.EntityContext {
        onReady(): $data.IPromise<any>;
      onReady(handler: (context: PPAEntities) => void): $data.IPromise<any>;
    
    MD_CALCUALTION: $data.EntitySet<PPAModel.MD_CALCUALTION>;
    MD_DOM_VALUE: $data.EntitySet<PPAModel.MD_DOM_VALUE>;
    MD_DOMAIN: $data.EntitySet<PPAModel.MD_DOMAIN>;
    MD_DT_CAUSE: $data.EntitySet<PPAModel.MD_DT_CAUSE>;
    MD_DT_CLASSE: $data.EntitySet<PPAModel.MD_DT_CLASSE>;
    MD_EQPDT_PAR_TAG: $data.EntitySet<PPAModel.MD_EQPDT_PAR_TAG>;
    MD_EQPMAT_PAR_TAG: $data.EntitySet<PPAModel.MD_EQPMAT_PAR_TAG>;
    MD_PAR_CATEGORY: $data.EntitySet<PPAModel.MD_PAR_CATEGORY>;
    MD_PAR_CLASSIFICATION: $data.EntitySet<PPAModel.MD_PAR_CLASSIFICATION>;
    MD_PARAMETER: $data.EntitySet<PPAModel.MD_PARAMETER>;
    MD_UNITS_OF_MEASURE: $data.EntitySet<PPAModel.MD_UNITS_OF_MEASURE>;
    PM_CYC_TEAM: $data.EntitySet<PPAModel.PM_CYC_TEAM>;
    PM_ENG_CONSUMPTION: $data.EntitySet<PPAModel.PM_ENG_CONSUMPTION>;
    PM_EQP_CONSUMPTION: $data.EntitySet<PPAModel.PM_EQP_CONSUMPTION>;
    PM_EQP_DT_EVENT: $data.EntitySet<PPAModel.PM_EQP_DT_EVENT>;
    PM_EQP_LEVEL: $data.EntitySet<PPAModel.PM_EQP_LEVEL>;
    PM_EQP_PERFORMANCE: $data.EntitySet<PPAModel.PM_EQP_PERFORMANCE>;
    PM_EQP_PROPERTY: $data.EntitySet<PPAModel.PM_EQP_PROPERTY>;
    PM_EQP_QUALITY: $data.EntitySet<PPAModel.PM_EQP_QUALITY>;
    PM_EQUIPMENT: $data.EntitySet<PPAModel.PM_EQUIPMENT>;
    PM_PER_DETAIL: $data.EntitySet<PPAModel.PM_PER_DETAIL>;
    PM_PERIOD: $data.EntitySet<PPAModel.PM_PERIOD>;
    PM_SH_CYCLE: $data.EntitySet<PPAModel.PM_SH_CYCLE>;
    PM_SHIFT: $data.EntitySet<PPAModel.PM_SHIFT>;
    PPA_DT_RECORD: $data.EntitySet<PPAModel.PPA_DT_RECORD>;
    PPA_DTR_PARAMETER: $data.EntitySet<PPAModel.PPA_DTR_PARAMETER>;
    PPA_ENG_CONSUMPTION: $data.EntitySet<PPAModel.PPA_ENG_CONSUMPTION>;
    PPA_ENGC_RECORD: $data.EntitySet<PPAModel.PPA_ENGC_RECORD>;
    PPA_MAT_CONSUMPTION: $data.EntitySet<PPAModel.PPA_MAT_CONSUMPTION>;
    PPA_MAT_PARAMETER: $data.EntitySet<PPAModel.PPA_MAT_PARAMETER>;
    PPA_MAT_STRUCTURE_ELEMENT: $data.EntitySet<PPAModel.PPA_MAT_STRUCTURE_ELEMENT>;
    PPA_MATC_RECORD: $data.EntitySet<PPAModel.PPA_MATC_RECORD>;
    PPA_MATCR_PARAMETER: $data.EntitySet<PPAModel.PPA_MATCR_PARAMETER>;
    PPA_MATERIAL: $data.EntitySet<PPAModel.PPA_MATERIAL>;
    PPA_OEE_SUMMARY: $data.EntitySet<PPAModel.PPA_OEE_SUMMARY>;
    PPA_PER_DETAIL: $data.EntitySet<PPAModel.PPA_PER_DETAIL>;
    PPA_PER_RECORD: $data.EntitySet<PPAModel.PPA_PER_RECORD>;
    PPA_PERIOD: $data.EntitySet<PPAModel.PPA_PERIOD>;
    PPA_QA_RECORD: $data.EntitySet<PPAModel.PPA_QA_RECORD>;
    PPA_SHIFT: $data.EntitySet<PPAModel.PPA_SHIFT>;
    SYS_USER_SESSION: $data.EntitySet<PPAModel.SYS_USER_SESSION>;
    GetSequenceNextValue: {
        (sequenceName: string, handler?: (result: string) => void): $data.IPromise<any>;
        (params?: { sequenceName?: string; }, handler?: (result: string) => void): $data.IPromise<any>;
    };
    GetSequenceNextValues: {
        (sequenceName: string, count: number, handler?: (result: string[]) => void): $data.IPromise<any>;
        (params?: { sequenceName?: string; count?: number; }, handler?: (result: string[]) => void): $data.IPromise<any>;
    };
    
  }

}