export interface ICard {
  id: string;
  carName: string;
  carPrice: string;
  images: string[];
  cardCardDetails: carDetails;
}

export interface carDetails {
  statusCar: string;
  productionYear: string;
  mileage: string;
  engine: string;
  kpp: string;
  privod: string;
  generation: string;
  kits: string;
  steeringWheel: string;
  body: string;
  color: string;
  pts: string;
  ownerByPTS: number;
  condition: string;
  vinNumber: string;
  ownerName: string;
  ownerPhone: string;
  ownerAddress: string;
  description: {
    title: string,
    body: string
  };
}

export const CARS_CARD_LIST: ICard[]  = [
  {
    id: "0",
    carName: "Mers",
    carPrice: "0000000000",
    images: [
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fs_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_pr_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rst_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fql_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_eb1_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ca_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ds_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_shf_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rps_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_wc_izmo_1_1600x1067.avif",
    ],
    cardCardDetails: {
      statusCar: "В наличии",
      productionYear: "2020",
      mileage: "98 639 км",
      engine: "дизель, 3.0 л",
      kpp: "Автомат",
      privod: "полный",
      generation: "1 поколение",
      kits: "xDrive30d AT M Sport Plus",
      steeringWheel: "левый",
      body: "Внедорожник 5-дверный",
      color: "Черный",
      pts: "Оригинал",
      ownerByPTS: 1,
      condition: "Не требует ремонта",
      vinNumber: "WBAC64564ASDAWGRTDR3E2",
      ownerName: "АвтоЭксперт Премиум",
      ownerPhone: "+998 55 520 44 44",
      ownerAddress: " Узбекистан, г. Ташкент, Сергели-5, ТКАД, 62",
      description: {
        title: "Описание",
        body: " Куплена новой у официального дилера в РФ в конце декабря 2020 года. " +
          "По причине отъезда владельца заграницу сразу после покупки, с тех пор стояла в теплом, " +
          "сухом и охраняемом паркинге, лишь изредка использовалась и обслуживалась у ОД родственниками пенсионного возраста. " +
          "Ни разу не использовали Launch Control, никакого тюнинга, эксплуатация только в пределах скоростного лимита. " +
          "В салоне поставили оригинальную ковку M Performance (самые легкие диски для данного кузова) на шинах Michelin Pilot Sport 4S," +
          "так же есть зимняя липучка Continental Winter Contact TS860S SSR для этих же дисков.  Богатая комплектация: " +
          "Адаптивный круиз-контроль, люк, пакет M Technology, проекция, двойное остекление (в салоне тише, " +
          "чем во многих премиальных внедорожниках), лазерные фары, покрашенные."
      },
    }
  },
  {
    id: "1",
    carName: "Audi RS-5",
    carPrice: "1111111111",
    images: [
      "./assets/images/audi-rs-5/2024_audi_rs-5_4dr-hatchback_base_fql_izmo_1_1600x1067.jpg",
      "./assets/images/audi-rs-5/2024_audi_rs-5_4dr-hatchback_base_fs_izmo_1_1600x1067.jpg",
      "./assets/images/audi-rs-5/2024_audi_rs-5_4dr-hatchback_base_rqn_izmo_1_1600x1067.jpg",
      "./assets/images/audi-rs-5/2024_audi_rs-5_4dr-hatchback_base_rst_izmo_1_1600x1067.jpg",
      "./assets/images/audi-rs-5/2024_audi_rs-5_4dr-hatchback_base_tds_izmo_2_1600x1067.jpg",
      "./assets/images/audi-rs-5/2024_audi_rs-5_4dr-hatchback_base_tds2_izmo_2_1600x1067.jpg",
      "./assets/images/audi-rs-5/2024_audi_rs-5_4dr-hatchback_base_tds3_izmo_2_1600x1067.jpg",
      "./assets/images/audi-rs-5/2024_audi_rs-5_4dr-hatchback_base_tds4_izmo_2_1600x1067.jpg",
      "./assets/images/audi-rs-5/2023_audi_rs-5_4dr-hatchback_base_swd_oem_1_1600x1067.jpg",
      "./assets/images/audi-rs-5/2023_audi_rs-5_4dr-hatchback_base_ri_oem_1_1600x1067.jpg",
      "./assets/images/audi-rs-5/2024_audi_rs-5_4dr-hatchback_base_rps_izmo_1_1600x1067.jpg",
      "./assets/images/audi-rs-5/2024_audi_rs-5_4dr-hatchback_base_ib2_izmo_1_1600x1067.jpg",
      "./assets/images/audi-rs-5/2024_audi_rs-5_4dr-hatchback_base_sh_izmo_1_1600x1067.jpg",
      "./assets/images/audi-rs-5/2024_audi_rs-5_4dr-hatchback_base_wc_izmo_1_1600x1067.jpg",
      "./assets/images/audi-rs-5/2024_audi_rs-5_4dr-hatchback_base_ib2_izmo_1_1600x1067.jpg",
      "./assets/images/audi-rs-5/2024_audi_rs-5_4dr-hatchback_base_en_izmo_1_1600x1067.jpg",
    ],
    cardCardDetails: {
      statusCar: "В наличии",
      productionYear: "2020",
      mileage: "98 639 км",
      engine: "дизель, 3.0 л",
      kpp: "Автомат",
      privod: "полный",
      generation: "1 поколение",
      kits: "xDrive30d AT M Sport Plus",
      steeringWheel: "левый",
      body: "Внедорожник 5-дверный",
      color: "Черный",
      pts: "Оригинал",
      ownerByPTS: 1,
      condition: "Не требует ремонта",
      vinNumber: "WBAC64564ASDAWGRTDR3E2",
      ownerName: "АвтоЭксперт Премиум",
      ownerPhone: "+998 55 520 44 44",
      ownerAddress: " Узбекистан, г. Ташкент, Сергели-5, ТКАД, 62",
      description: {
        title: "Описание",
        body: " Куплена новой у официального дилера в РФ в конце декабря 2020 года. " +
          "По причине отъезда владельца заграницу сразу после покупки, с тех пор стояла в теплом, " +
          "сухом и охраняемом паркинге, лишь изредка использовалась и обслуживалась у ОД родственниками пенсионного возраста. " +
          "Ни разу не использовали Launch Control, никакого тюнинга, эксплуатация только в пределах скоростного лимита. " +
          "В салоне поставили оригинальную ковку M Performance (самые легкие диски для данного кузова) на шинах Michelin Pilot Sport 4S," +
          "так же есть зимняя липучка Continental Winter Contact TS860S SSR для этих же дисков.  Богатая комплектация: " +
          "Адаптивный круиз-контроль, люк, пакет M Technology, проекция, двойное остекление (в салоне тише, " +
          "чем во многих премиальных внедорожниках), лазерные фары, покрашенные."
      },
    }
  },
  {
    id: "2",
    carName: "BMW i7 m70",
    carPrice: "2222222222",
    images: [
      "./assets/images/bmw-i7/2024_bmw_i7_sedan_xdrive60_fq_oem_2_1600x1067.avif",
      "./assets/images/bmw-i7/2024_bmw_i7_sedan_xdrive60_f_oem_7_1600x1067.avif",
      "./assets/images/bmw-i7/2024_bmw_i7_sedan_xdrive60_fq_oem_4_1600x1067.avif",
      "./assets/images/bmw-i7/2024_bmw_i7_sedan_xdrive60_fq_oem_10_1600x1067.avif",
      "./assets/images/bmw-i7/2024_bmw_i7_sedan_xdrive60_rq_oem_8_1600x1067.avif",
      "./assets/images/bmw-i7/2024_bmw_i7_sedan_xdrive60_s_oem_5_1600x1067.avif",
      "./assets/images/bmw-i7/2024_bmw_i7_sedan_xdrive60_rq_oem_15_1600x1067.avif",
      "./assets/images/bmw-i7/2024_bmw_i7_sedan_m70_detail_oem_1_1600x1067.avif",
      "./assets/images/bmw-i7/2024_bmw_i7_sedan_m70_detail_oem_2_1600x1067.avif",
      "./assets/images/bmw-i7/2024_bmw_i7_sedan_m70_shf_oem_1_1600x1067.avif",
      "./assets/images/bmw-i7/2024_bmw_i7_sedan_xdrive60_detail_oem_10_1600x1067.jpg",
      "./assets/images/bmw-i7/2024_bmw_i7_sedan_xdrive60_detail_oem_16_1600x1067.avif",
      "./assets/images/bmw-i7/2024_bmw_i7_sedan_xdrive60_detail_oem_9_1600x1067.avif",
      "./assets/images/bmw-i7/2024_bmw_i7_sedan_xdrive60_edetail_oem_11_1600x1067.avif",
      "./assets/images/bmw-i7/2024_bmw_i7_sedan_xdrive60_en_izmo_1_1600x1067.avif",
      "./assets/images/bmw-i7/2024_bmw_i7_sedan_xdrive60_detail_oem_1_1600x1067.avif",
      "./assets/images/bmw-i7/2024_bmw_i7_sedan_xdrive60_d_oem_2_1600x1067.jpg",
      "./assets/images/bmw-i7/2024_bmw_i7_sedan_xdrive60_auxctrl_oem_1_1600x1067.webp",
      "./assets/images/bmw-i7/2024_bmw_i7_sedan_xdrive60_w_oem_2_1600x1067.avif",
      "./assets/images/bmw-i7/2024_bmw_i7_sedan_xdrive60_s_oem_5_1600x1067.avif",
      "./assets/images/bmw-i7/2024_bmw_i7_sedan_xdrive60_rq_oem_13_1600x1067.avif",
    ],
    cardCardDetails: {
      statusCar: "В наличии",
      productionYear: "2020",
      mileage: "98 639 км",
      engine: "дизель, 3.0 л",
      kpp: "Автомат",
      privod: "полный",
      generation: "1 поколение",
      kits: "xDrive30d AT M Sport Plus",
      steeringWheel: "левый",
      body: "Внедорожник 5-дверный",
      color: "Черный",
      pts: "Оригинал",
      ownerByPTS: 1,
      condition: "Не требует ремонта",
      vinNumber: "WBAC64564ASDAWGRTDR3E2",
      ownerName: "АвтоЭксперт Премиум",
      ownerPhone: "+998 55 520 44 44",
      ownerAddress: " Узбекистан, г. Ташкент, Сергели-5, ТКАД, 62",
      description: {
        title: "Описание",
        body: " Куплена новой у официального дилера в РФ в конце декабря 2020 года. " +
          "По причине отъезда владельца заграницу сразу после покупки, с тех пор стояла в теплом, " +
          "сухом и охраняемом паркинге, лишь изредка использовалась и обслуживалась у ОД родственниками пенсионного возраста. " +
          "Ни разу не использовали Launch Control, никакого тюнинга, эксплуатация только в пределах скоростного лимита. " +
          "В салоне поставили оригинальную ковку M Performance (самые легкие диски для данного кузова) на шинах Michelin Pilot Sport 4S," +
          "так же есть зимняя липучка Continental Winter Contact TS860S SSR для этих же дисков.  Богатая комплектация: " +
          "Адаптивный круиз-контроль, люк, пакет M Technology, проекция, двойное остекление (в салоне тише, " +
          "чем во многих премиальных внедорожниках), лазерные фары, покрашенные."
      },
    }
  },
  {
    id: "3",
    carName: "Lexus lc convertible 500",
    carPrice: "333333333333333",
    images: [
      "./assets/images/lexus_lc_convertible-500/2024_lexus_lc_convertible_500_fqn_izmo_1_1600x1067.jpg",
      "./assets/images/lexus_lc_convertible-500/2024_lexus_lc_convertible_500_fs_izmo_1_1600x1067.jpg",
      "./assets/images/lexus_lc_convertible-500/2024_lexus_lc_convertible_500_pr_izmo_1_1600x1067.jpg",
      "./assets/images/lexus_lc_convertible-500/2024_lexus_lc_convertible_500_rqn_izmo_1_1600x1067.jpg",
      "./assets/images/lexus_lc_convertible-500/2024_lexus_lc_convertible_500_rst_izmo_1_1600x1067.jpg",
      "./assets/images/lexus_lc_convertible-500/2024_lexus_lc_convertible_500_tds_izmo_3_1600x1067.jpg",
      "./assets/images/lexus_lc_convertible-500/2024_lexus_lc_convertible_500_tds2_izmo_3_1600x1067.jpg",
      "./assets/images/lexus_lc_convertible-500/2024_lexus_lc_convertible_500_tds4_izmo_3_1600x1067.jpg",
      "./assets/images/lexus_lc_convertible-500/2024_lexus_lc_convertible_500_eb1_izmo_1_1600x1067.jpg",
      "./assets/images/lexus_lc_convertible-500/2024_lexus_lc_convertible_500_ca_izmo_1_1600x1067.jpg",
      "./assets/images/lexus_lc_convertible-500/2024_lexus_lc_convertible_500_dds_izmo_1_1600x1067.jpg",
      "./assets/images/lexus_lc_convertible-500/2024_lexus_lc_convertible_500_fd_izmo_1_1600x1067.jpg",
      "./assets/images/lexus_lc_convertible-500/2024_lexus_lc_convertible_500_ds_izmo_1_1600x1067.jpg",
      "./assets/images/lexus_lc_convertible-500/2024_lexus_lc_convertible_500_ac_izmo_1_1600x1067.jpg",
      "./assets/images/lexus_lc_convertible-500/2024_lexus_lc_convertible_500_rps_izmo_1_1600x1067.jpg",
      "./assets/images/lexus_lc_convertible-500/2024_lexus_lc_convertible_500_ib2_izmo_1_1600x1067.jpg",
      "./assets/images/lexus_lc_convertible-500/2024_lexus_lc_convertible_500_sh_izmo_1_1600x1067.jpg",

    ],
    cardCardDetails: {
      statusCar: "В наличии",
      productionYear: "2020",
      mileage: "98 639 км",
      engine: "бензин, 3.0 л",
      kpp: "Автомат",
      privod: "полный",
      generation: "1 поколение",
      kits: "xDrive30d AT M Sport Plus",
      steeringWheel: "левый",
      body: "Внедорожник 5-дверный",
      color: "Черный",
      pts: "Оригинал",
      ownerByPTS: 1,
      condition: "Не требует ремонта",
      vinNumber: "WBAC64564ASDAWGRTDR3E2",
      ownerName: "АвтоЭксперт Премиум",
      ownerPhone: "+998 55 520 44 44",
      ownerAddress: " Узбекистан, г. Ташкент, Сергели-5, ТКАД, 62",
      description: {
        title: "Описание",
        body: " Куплена новой у официального дилера в РФ в конце декабря 2020 года. " +
          "По причине отъезда владельца заграницу сразу после покупки, с тех пор стояла в теплом, " +
          "сухом и охраняемом паркинге, лишь изредка использовалась и обслуживалась у ОД родственниками пенсионного возраста. " +
          "Ни разу не использовали Launch Control, никакого тюнинга, эксплуатация только в пределах скоростного лимита. " +
          "В салоне поставили оригинальную ковку M Performance (самые легкие диски для данного кузова) на шинах Michelin Pilot Sport 4S," +
          "так же есть зимняя липучка Continental Winter Contact TS860S SSR для этих же дисков.  Богатая комплектация: " +
          "Адаптивный круиз-контроль, люк, пакет M Technology, проекция, двойное остекление (в салоне тише, " +
          "чем во многих премиальных внедорожниках), лазерные фары, покрашенные."
      },
    }
  },
  {
    id: "4",
    carName: "Lexus rc f-coupe track edition",
    carPrice: "44444444444",
    images: [
      "./assets/images/lexus_rc-f/2023_lexus_rc-f_coupe_track-edition_fql_izmo_1_1600x1067.jpg",
      "./assets/images/lexus_rc-f/2023_lexus_rc-f_coupe_track-edition_fqn_izmo_1_1600x1067.jpg",
      "./assets/images/lexus_rc-f/2023_lexus_rc-f_coupe_track-edition_fs_izmo_1_1600x1067.jpg",
      "./assets/images/lexus_rc-f/2023_lexus_rc-f_coupe_track-edition_exp_izmo_1_005_1600x1067.jpg",
      "./assets/images/lexus_rc-f/2023_lexus_rc-f_coupe_track-edition_pr_izmo_1_1600x1067.jpg",
      "./assets/images/lexus_rc-f/2023_lexus_rc-f_coupe_track-edition_rqn_izmo_1_1600x1067.jpg",
      "./assets/images/lexus_rc-f/2023_lexus_rc-f_coupe_track-edition_rst_izmo_1_1600x1067.jpg",
      "./assets/images/lexus_rc-f/2023_lexus_rc-f_coupe_track-edition_tds_izmo_1_1600x1067.jpg",
      "./assets/images/lexus_rc-f/2023_lexus_rc-f_coupe_track-edition_tds2_izmo_1_1600x1067.jpg",
      "./assets/images/lexus_rc-f/2023_lexus_rc-f_coupe_track-edition_tds3_izmo_1_1600x1067.jpg",
      "./assets/images/lexus_rc-f/2023_lexus_rc-f_coupe_track-edition_tds4_izmo_1_1600x1067.jpg",
      "./assets/images/lexus_rc-f/2023_lexus_rc-f_coupe_track-edition_fd_izmo_1_1600x1067.jpg",
      "./assets/images/lexus_rc-f/2023_lexus_rc-f_coupe_track-edition_ds_izmo_1_1600x1067.jpg",
      "./assets/images/lexus_rc-f/2023_lexus_rc-f_coupe_track-edition_ib1_izmo_1_1600x1067.jpg",
      "./assets/images/lexus_rc-f/2023_lexus_rc-f_coupe_track-edition_cc_izmo_1_1600x1067.jpg",
      "./assets/images/lexus_rc-f/2023_lexus_rc-f_coupe_track-edition_dds_izmo_1_1600x1067.jpg",
      "./assets/images/lexus_rc-f/2023_lexus_rc-f_coupe_base_i_oem_1_1600x1067.jpg",
      "./assets/images/lexus_rc-f/2023_lexus_rc-f_coupe_base_swd_oem_1_1600x1067.jpg",
      "./assets/images/lexus_rc-f/2023_lexus_rc-f_coupe_track-edition_rps_izmo_1_1600x1067.jpg",
      "./assets/images/lexus_rc-f/2023_lexus_rc-f_coupe_track-edition_sh_izmo_1_1600x1067.jpg",
      "./assets/images/lexus_rc-f/2023_lexus_rc-f_coupe_track-edition_ib2_izmo_1_1600x1067.jpg",
    ],
    cardCardDetails: {
      statusCar: "В наличии",
      productionYear: "2020",
      mileage: "98 639 км",
      engine: "бензин, 3.0 л",
      kpp: "Автомат",
      privod: "полный",
      generation: "1 поколение",
      kits: "xDrive30d AT M Sport Plus",
      steeringWheel: "левый",
      body: "Внедорожник 5-дверный",
      color: "Черный",
      pts: "Оригинал",
      ownerByPTS: 1,
      condition: "Не требует ремонта",
      vinNumber: "WBAC64564ASDAWGRTDR3E2",
      ownerName: "АвтоЭксперт Премиум",
      ownerPhone: "+998 55 520 44 44",
      ownerAddress: " Узбекистан, г. Ташкент, Сергели-5, ТКАД, 62",
      description: {
        title: "Описание",
        body: " Куплена новой у официального дилера в РФ в конце декабря 2020 года. " +
          "По причине отъезда владельца заграницу сразу после покупки, с тех пор стояла в теплом, " +
          "сухом и охраняемом паркинге, лишь изредка использовалась и обслуживалась у ОД родственниками пенсионного возраста. " +
          "Ни разу не использовали Launch Control, никакого тюнинга, эксплуатация только в пределах скоростного лимита. " +
          "В салоне поставили оригинальную ковку M Performance (самые легкие диски для данного кузова) на шинах Michelin Pilot Sport 4S," +
          "так же есть зимняя липучка Continental Winter Contact TS860S SSR для этих же дисков.  Богатая комплектация: " +
          "Адаптивный круиз-контроль, люк, пакет M Technology, проекция, двойное остекление (в салоне тише, " +
          "чем во многих премиальных внедорожниках), лазерные фары, покрашенные."
      },
    }
  },
  {
    id: "5",
    carName: "Toyota corolla hatchback",
    carPrice: "455555555555",
    images: [
      "./assets/images/tayota-carolla-hatchback/2025_toyota_corolla-hatchback_4dr-hatchback_se_fqn_izmo_1_1600x1067.jpg",
      "./assets/images/tayota-carolla-hatchback/2025_toyota_corolla-hatchback_4dr-hatchback_se_fql_izmo_1_1600x1067.jpg",
      "./assets/images/tayota-carolla-hatchback/2025_toyota_corolla-hatchback_4dr-hatchback_se_exp_izmo_13_036_1600x1067.jpg",
      "./assets/images/tayota-carolla-hatchback/2025_toyota_corolla-hatchback_4dr-hatchback_se_exp_izmo_8_023_1600x1067.avif",
      "./assets/images/tayota-carolla-hatchback/2025_toyota_corolla-hatchback_4dr-hatchback_se_fs_izmo_1_1600x1067.jpg",
      "./assets/images/tayota-carolla-hatchback/2025_toyota_corolla-hatchback_4dr-hatchback_se_pr_izmo_1_1600x1067.jpg",
      "./assets/images/tayota-carolla-hatchback/2025_toyota_corolla-hatchback_4dr-hatchback_se_rst_izmo_1_1600x1067.jpg",
      "./assets/images/tayota-carolla-hatchback/2025_toyota_corolla-hatchback_4dr-hatchback_se_tds3_izmo_7_1600x1067.jpg",
      "./assets/images/tayota-carolla-hatchback/2025_toyota_corolla-hatchback_4dr-hatchback_se_tds2_izmo_12_1600x1067.jpg",
      "./assets/images/tayota-carolla-hatchback/2025_toyota_corolla-hatchback_4dr-hatchback_se_ca_izmo_1_1600x1067.jpg",
      "./assets/images/tayota-carolla-hatchback/2025_toyota_corolla-hatchback_4dr-hatchback_nightshade_tds_izmo_1_1600x1067.jpg",
      "./assets/images/tayota-carolla-hatchback/2025_toyota_corolla-hatchback_4dr-hatchback_nightshade_fd_izmo_1_1600x1067.jpg",
      "./assets/images/tayota-carolla-hatchback/2025_toyota_corolla-hatchback_4dr-hatchback_se_ds_izmo_1_1600x1067.jpg",
      "./assets/images/tayota-carolla-hatchback/2025_toyota_corolla-hatchback_4dr-hatchback_se_g_oem_1_1600x1067.jpg",
      "./assets/images/tayota-carolla-hatchback/2025_toyota_corolla-hatchback_4dr-hatchback_se_ib2_izmo_1_1600x1067.jpg",
      "./assets/images/tayota-carolla-hatchback/2025_toyota_corolla-hatchback_4dr-hatchback_se_rps_izmo_1_1600x1067.jpg",
      "./assets/images/tayota-carolla-hatchback/2025_toyota_corolla-hatchback_4dr-hatchback_se_ri_oem_1_1600x1067.jpg",
      "./assets/images/tayota-carolla-hatchback/2025_toyota_corolla-hatchback_4dr-hatchback_se_ib1_izmo_1_1600x1067.jpg",
      "./assets/images/tayota-carolla-hatchback/2025_toyota_corolla-hatchback_4dr-hatchback_se_dh_izmo_1_1600x1067.jpg",
      "./assets/images/tayota-carolla-hatchback/2025_toyota_corolla-hatchback_4dr-hatchback_se_sm_izmo_1_1600x1067.jpg",
      "./assets/images/tayota-carolla-hatchback/2025_toyota_corolla-hatchback_4dr-hatchback_se_sh_izmo_1_1600x1067.jpg",
    ],
    cardCardDetails: {
      statusCar: "В наличии",
      productionYear: "2020",
      mileage: "98 639 км",
      engine: "бензин, 4.0 л",
      kpp: "Автомат",
      privod: "полный",
      generation: "1 поколение",
      kits: "xDrive30d AT M Sport Plus",
      steeringWheel: "левый",
      body: "Внедорожник 5-дверный",
      color: "Черный",
      pts: "Оригинал",
      ownerByPTS: 1,
      condition: "Не требует ремонта",
      vinNumber: "WBAC64564ASDAWGRTDR3E2",
      ownerName: "АвтоЭксперт Премиум",
      ownerPhone: "+998 55 520 44 44",
      ownerAddress: " Узбекистан, г. Ташкент, Сергели-5, ТКАД, 62",
      description: {
        title: "Описание",
        body: " Куплена новой у официального дилера в РФ в конце декабря 2020 года. " +
          "По причине отъезда владельца заграницу сразу после покупки, с тех пор стояла в теплом, " +
          "сухом и охраняемом паркинге, лишь изредка использовалась и обслуживалась у ОД родственниками пенсионного возраста. " +
          "Ни разу не использовали Launch Control, никакого тюнинга, эксплуатация только в пределах скоростного лимита. " +
          "В салоне поставили оригинальную ковку M Performance (самые легкие диски для данного кузова) на шинах Michelin Pilot Sport 4S," +
          "так же есть зимняя липучка Continental Winter Contact TS860S SSR для этих же дисков.  Богатая комплектация: " +
          "Адаптивный круиз-контроль, люк, пакет M Technology, проекция, двойное остекление (в салоне тише, " +
          "чем во многих премиальных внедорожниках), лазерные фары, покрашенные."
      },
    }
  },
  {
    id: "6",
    carName: "BYD Song Plus Champion Edition",
    carPrice: "380987300",
    images: [
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fs_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_pr_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rst_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fql_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_eb1_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ca_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ds_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_shf_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rps_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_wc_izmo_1_1600x1067.avif",
    ],
    cardCardDetails: {
      statusCar: "В наличии",
      productionYear: "2020",
      mileage: "98 639 км",
      engine: "дизель, 3.0 л",
      kpp: "Автомат",
      privod: "полный",
      generation: "1 поколение",
      kits: "xDrive30d AT M Sport Plus",
      steeringWheel: "левый",
      body: "Внедорожник 5-дверный",
      color: "Черный",
      pts: "Оригинал",
      ownerByPTS: 1,
      condition: "Не требует ремонта",
      vinNumber: "WBAC64564ASDAWGRTDR3E2",
      ownerName: "АвтоЭксперт Премиум",
      ownerPhone: "+998 55 520 44 44",
      ownerAddress: " Узбекистан, г. Ташкент, Сергели-5, ТКАД, 62",
      description: {
        title: "Описание",
        body: " Куплена новой у официального дилера в РФ в конце декабря 2020 года. " +
          "По причине отъезда владельца заграницу сразу после покупки, с тех пор стояла в теплом, " +
          "сухом и охраняемом паркинге, лишь изредка использовалась и обслуживалась у ОД родственниками пенсионного возраста. " +
          "Ни разу не использовали Launch Control, никакого тюнинга, эксплуатация только в пределах скоростного лимита. " +
          "В салоне поставили оригинальную ковку M Performance (самые легкие диски для данного кузова) на шинах Michelin Pilot Sport 4S," +
          "так же есть зимняя липучка Continental Winter Contact TS860S SSR для этих же дисков.  Богатая комплектация: " +
          "Адаптивный круиз-контроль, люк, пакет M Technology, проекция, двойное остекление (в салоне тише, " +
          "чем во многих премиальных внедорожниках), лазерные фары, покрашенные."
      },
    }
  },
  {
    id: "7",
    carName: "BYD Song Plus Champion Edition",
    carPrice: "380987300",
    images: [
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fs_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_pr_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rst_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fql_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_eb1_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ca_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ds_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_shf_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rps_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_wc_izmo_1_1600x1067.avif",
    ],
    cardCardDetails: {
      statusCar: "В наличии",
      productionYear: "2020",
      mileage: "98 639 км",
      engine: "дизель, 3.0 л",
      kpp: "Автомат",
      privod: "полный",
      generation: "1 поколение",
      kits: "xDrive30d AT M Sport Plus",
      steeringWheel: "левый",
      body: "Внедорожник 5-дверный",
      color: "Черный",
      pts: "Оригинал",
      ownerByPTS: 1,
      condition: "Не требует ремонта",
      vinNumber: "WBAC64564ASDAWGRTDR3E2",
      ownerName: "АвтоЭксперт Премиум",
      ownerPhone: "+998 55 520 44 44",
      ownerAddress: " Узбекистан, г. Ташкент, Сергели-5, ТКАД, 62",
      description: {
        title: "Описание",
        body: " Куплена новой у официального дилера в РФ в конце декабря 2020 года. " +
          "По причине отъезда владельца заграницу сразу после покупки, с тех пор стояла в теплом, " +
          "сухом и охраняемом паркинге, лишь изредка использовалась и обслуживалась у ОД родственниками пенсионного возраста. " +
          "Ни разу не использовали Launch Control, никакого тюнинга, эксплуатация только в пределах скоростного лимита. " +
          "В салоне поставили оригинальную ковку M Performance (самые легкие диски для данного кузова) на шинах Michelin Pilot Sport 4S," +
          "так же есть зимняя липучка Continental Winter Contact TS860S SSR для этих же дисков.  Богатая комплектация: " +
          "Адаптивный круиз-контроль, люк, пакет M Technology, проекция, двойное остекление (в салоне тише, " +
          "чем во многих премиальных внедорожниках), лазерные фары, покрашенные."
      },
    }
  },
  {
    id: "8",
    carName: "BYD Song Plus Champion Edition",
    carPrice: "380987300",
    images: [
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fs_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_pr_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rst_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fql_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_eb1_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ca_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ds_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_shf_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rps_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_wc_izmo_1_1600x1067.avif",
    ],
    cardCardDetails: {
      statusCar: "В наличии",
      productionYear: "2020",
      mileage: "98 639 км",
      engine: "дизель, 3.0 л",
      kpp: "Автомат",
      privod: "полный",
      generation: "1 поколение",
      kits: "xDrive30d AT M Sport Plus",
      steeringWheel: "левый",
      body: "Внедорожник 5-дверный",
      color: "Черный",
      pts: "Оригинал",
      ownerByPTS: 1,
      condition: "Не требует ремонта",
      vinNumber: "WBAC64564ASDAWGRTDR3E2",
      ownerName: "АвтоЭксперт Премиум",
      ownerPhone: "+998 55 520 44 44",
      ownerAddress: " Узбекистан, г. Ташкент, Сергели-5, ТКАД, 62",
      description: {
        title: "Описание",
        body: " Куплена новой у официального дилера в РФ в конце декабря 2020 года. " +
          "По причине отъезда владельца заграницу сразу после покупки, с тех пор стояла в теплом, " +
          "сухом и охраняемом паркинге, лишь изредка использовалась и обслуживалась у ОД родственниками пенсионного возраста. " +
          "Ни разу не использовали Launch Control, никакого тюнинга, эксплуатация только в пределах скоростного лимита. " +
          "В салоне поставили оригинальную ковку M Performance (самые легкие диски для данного кузова) на шинах Michelin Pilot Sport 4S," +
          "так же есть зимняя липучка Continental Winter Contact TS860S SSR для этих же дисков.  Богатая комплектация: " +
          "Адаптивный круиз-контроль, люк, пакет M Technology, проекция, двойное остекление (в салоне тише, " +
          "чем во многих премиальных внедорожниках), лазерные фары, покрашенные."
      },
    }
  },
  {
    id: "9",
    carName: "BYD Song Plus Champion Edition",
    carPrice: "380987300",
    images: [
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fs_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_pr_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rst_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fql_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_eb1_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ca_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ds_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_shf_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rps_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_wc_izmo_1_1600x1067.avif",
    ],
    cardCardDetails: {
      statusCar: "В наличии",
      productionYear: "2020",
      mileage: "98 639 км",
      engine: "дизель, 3.0 л",
      kpp: "Автомат",
      privod: "полный",
      generation: "1 поколение",
      kits: "xDrive30d AT M Sport Plus",
      steeringWheel: "левый",
      body: "Внедорожник 5-дверный",
      color: "Черный",
      pts: "Оригинал",
      ownerByPTS: 1,
      condition: "Не требует ремонта",
      vinNumber: "WBAC64564ASDAWGRTDR3E2",
      ownerName: "АвтоЭксперт Премиум",
      ownerPhone: "+998 55 520 44 44",
      ownerAddress: " Узбекистан, г. Ташкент, Сергели-5, ТКАД, 62",
      description: {
        title: "Описание",
        body: " Куплена новой у официального дилера в РФ в конце декабря 2020 года. " +
          "По причине отъезда владельца заграницу сразу после покупки, с тех пор стояла в теплом, " +
          "сухом и охраняемом паркинге, лишь изредка использовалась и обслуживалась у ОД родственниками пенсионного возраста. " +
          "Ни разу не использовали Launch Control, никакого тюнинга, эксплуатация только в пределах скоростного лимита. " +
          "В салоне поставили оригинальную ковку M Performance (самые легкие диски для данного кузова) на шинах Michelin Pilot Sport 4S," +
          "так же есть зимняя липучка Continental Winter Contact TS860S SSR для этих же дисков.  Богатая комплектация: " +
          "Адаптивный круиз-контроль, люк, пакет M Technology, проекция, двойное остекление (в салоне тише, " +
          "чем во многих премиальных внедорожниках), лазерные фары, покрашенные."
      },
    }
  },
  {
    id: "10",
    carName: "BYD Song Plus Champion Edition",
    carPrice: "380987300",
    images: [
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fs_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_pr_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rst_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fql_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_eb1_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ca_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ds_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_shf_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rps_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_wc_izmo_1_1600x1067.avif",
    ],
    cardCardDetails: {
      statusCar: "В наличии",
      productionYear: "2020",
      mileage: "98 639 км",
      engine: "дизель, 3.0 л",
      kpp: "Автомат",
      privod: "полный",
      generation: "1 поколение",
      kits: "xDrive30d AT M Sport Plus",
      steeringWheel: "левый",
      body: "Внедорожник 5-дверный",
      color: "Черный",
      pts: "Оригинал",
      ownerByPTS: 1,
      condition: "Не требует ремонта",
      vinNumber: "WBAC64564ASDAWGRTDR3E2",
      ownerName: "АвтоЭксперт Премиум",
      ownerPhone: "+998 55 520 44 44",
      ownerAddress: " Узбекистан, г. Ташкент, Сергели-5, ТКАД, 62",
      description: {
        title: "Описание",
        body: " Куплена новой у официального дилера в РФ в конце декабря 2020 года. " +
          "По причине отъезда владельца заграницу сразу после покупки, с тех пор стояла в теплом, " +
          "сухом и охраняемом паркинге, лишь изредка использовалась и обслуживалась у ОД родственниками пенсионного возраста. " +
          "Ни разу не использовали Launch Control, никакого тюнинга, эксплуатация только в пределах скоростного лимита. " +
          "В салоне поставили оригинальную ковку M Performance (самые легкие диски для данного кузова) на шинах Michelin Pilot Sport 4S," +
          "так же есть зимняя липучка Continental Winter Contact TS860S SSR для этих же дисков.  Богатая комплектация: " +
          "Адаптивный круиз-контроль, люк, пакет M Technology, проекция, двойное остекление (в салоне тише, " +
          "чем во многих премиальных внедорожниках), лазерные фары, покрашенные."
      },
    }
  },
  {
    id: "11",
    carName: "BYD Song Plus Champion Edition",
    carPrice: "380987300",
    images: [
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fs_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_pr_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rst_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fql_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_eb1_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ca_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ds_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_shf_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rps_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_wc_izmo_1_1600x1067.avif",
    ],
    cardCardDetails: {
      statusCar: "В наличии",
      productionYear: "2020",
      mileage: "98 639 км",
      engine: "дизель, 3.0 л",
      kpp: "Автомат",
      privod: "полный",
      generation: "1 поколение",
      kits: "xDrive30d AT M Sport Plus",
      steeringWheel: "левый",
      body: "Внедорожник 5-дверный",
      color: "Черный",
      pts: "Оригинал",
      ownerByPTS: 1,
      condition: "Не требует ремонта",
      vinNumber: "WBAC64564ASDAWGRTDR3E2",
      ownerName: "АвтоЭксперт Премиум",
      ownerPhone: "+998 55 520 44 44",
      ownerAddress: " Узбекистан, г. Ташкент, Сергели-5, ТКАД, 62",
      description: {
        title: "Описание",
        body: " Куплена новой у официального дилера в РФ в конце декабря 2020 года. " +
          "По причине отъезда владельца заграницу сразу после покупки, с тех пор стояла в теплом, " +
          "сухом и охраняемом паркинге, лишь изредка использовалась и обслуживалась у ОД родственниками пенсионного возраста. " +
          "Ни разу не использовали Launch Control, никакого тюнинга, эксплуатация только в пределах скоростного лимита. " +
          "В салоне поставили оригинальную ковку M Performance (самые легкие диски для данного кузова) на шинах Michelin Pilot Sport 4S," +
          "так же есть зимняя липучка Continental Winter Contact TS860S SSR для этих же дисков.  Богатая комплектация: " +
          "Адаптивный круиз-контроль, люк, пакет M Technology, проекция, двойное остекление (в салоне тише, " +
          "чем во многих премиальных внедорожниках), лазерные фары, покрашенные."
      },
    }
  },
  {
    id: "12",
    carName: "BYD Song Plus Champion Edition",
    carPrice: "380987300",
    images: [
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fs_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_pr_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rst_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fql_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_eb1_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ca_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ds_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_shf_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rps_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_wc_izmo_1_1600x1067.avif",
    ],
    cardCardDetails: {
      statusCar: "В наличии",
      productionYear: "2020",
      mileage: "98 639 км",
      engine: "дизель, 3.0 л",
      kpp: "Автомат",
      privod: "полный",
      generation: "1 поколение",
      kits: "xDrive30d AT M Sport Plus",
      steeringWheel: "левый",
      body: "Внедорожник 5-дверный",
      color: "Черный",
      pts: "Оригинал",
      ownerByPTS: 1,
      condition: "Не требует ремонта",
      vinNumber: "WBAC64564ASDAWGRTDR3E2",
      ownerName: "АвтоЭксперт Премиум",
      ownerPhone: "+998 55 520 44 44",
      ownerAddress: " Узбекистан, г. Ташкент, Сергели-5, ТКАД, 62",
      description: {
        title: "Описание",
        body: " Куплена новой у официального дилера в РФ в конце декабря 2020 года. " +
          "По причине отъезда владельца заграницу сразу после покупки, с тех пор стояла в теплом, " +
          "сухом и охраняемом паркинге, лишь изредка использовалась и обслуживалась у ОД родственниками пенсионного возраста. " +
          "Ни разу не использовали Launch Control, никакого тюнинга, эксплуатация только в пределах скоростного лимита. " +
          "В салоне поставили оригинальную ковку M Performance (самые легкие диски для данного кузова) на шинах Michelin Pilot Sport 4S," +
          "так же есть зимняя липучка Continental Winter Contact TS860S SSR для этих же дисков.  Богатая комплектация: " +
          "Адаптивный круиз-контроль, люк, пакет M Technology, проекция, двойное остекление (в салоне тише, " +
          "чем во многих премиальных внедорожниках), лазерные фары, покрашенные."
      },
    }
  },
  {
    id: "13",
    carName: "BYD Song Plus Champion Edition",
    carPrice: "380987300",
    images: [
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fs_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_pr_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rst_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fql_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_eb1_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ca_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ds_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_shf_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rps_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_wc_izmo_1_1600x1067.avif",
    ],
    cardCardDetails: {
      statusCar: "В наличии",
      productionYear: "2020",
      mileage: "98 639 км",
      engine: "дизель, 3.0 л",
      kpp: "Автомат",
      privod: "полный",
      generation: "1 поколение",
      kits: "xDrive30d AT M Sport Plus",
      steeringWheel: "левый",
      body: "Внедорожник 5-дверный",
      color: "Черный",
      pts: "Оригинал",
      ownerByPTS: 1,
      condition: "Не требует ремонта",
      vinNumber: "WBAC64564ASDAWGRTDR3E2",
      ownerName: "АвтоЭксперт Премиум",
      ownerPhone: "+998 55 520 44 44",
      ownerAddress: " Узбекистан, г. Ташкент, Сергели-5, ТКАД, 62",
      description: {
        title: "Описание",
        body: " Куплена новой у официального дилера в РФ в конце декабря 2020 года. " +
          "По причине отъезда владельца заграницу сразу после покупки, с тех пор стояла в теплом, " +
          "сухом и охраняемом паркинге, лишь изредка использовалась и обслуживалась у ОД родственниками пенсионного возраста. " +
          "Ни разу не использовали Launch Control, никакого тюнинга, эксплуатация только в пределах скоростного лимита. " +
          "В салоне поставили оригинальную ковку M Performance (самые легкие диски для данного кузова) на шинах Michelin Pilot Sport 4S," +
          "так же есть зимняя липучка Continental Winter Contact TS860S SSR для этих же дисков.  Богатая комплектация: " +
          "Адаптивный круиз-контроль, люк, пакет M Technology, проекция, двойное остекление (в салоне тише, " +
          "чем во многих премиальных внедорожниках), лазерные фары, покрашенные."
      },
    }
  },
  {
    id: "14",
    carName: "BYD Song Plus Champion Edition",
    carPrice: "380987300",
    images: [
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fs_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_pr_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rst_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fql_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_eb1_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ca_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ds_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_shf_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rps_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_wc_izmo_1_1600x1067.avif",
    ],
    cardCardDetails: {
      statusCar: "В наличии",
      productionYear: "2020",
      mileage: "98 639 км",
      engine: "дизель, 3.0 л",
      kpp: "Автомат",
      privod: "полный",
      generation: "1 поколение",
      kits: "xDrive30d AT M Sport Plus",
      steeringWheel: "левый",
      body: "Внедорожник 5-дверный",
      color: "Черный",
      pts: "Оригинал",
      ownerByPTS: 1,
      condition: "Не требует ремонта",
      vinNumber: "WBAC64564ASDAWGRTDR3E2",
      ownerName: "АвтоЭксперт Премиум",
      ownerPhone: "+998 55 520 44 44",
      ownerAddress: " Узбекистан, г. Ташкент, Сергели-5, ТКАД, 62",
      description: {
        title: "Описание",
        body: " Куплена новой у официального дилера в РФ в конце декабря 2020 года. " +
          "По причине отъезда владельца заграницу сразу после покупки, с тех пор стояла в теплом, " +
          "сухом и охраняемом паркинге, лишь изредка использовалась и обслуживалась у ОД родственниками пенсионного возраста. " +
          "Ни разу не использовали Launch Control, никакого тюнинга, эксплуатация только в пределах скоростного лимита. " +
          "В салоне поставили оригинальную ковку M Performance (самые легкие диски для данного кузова) на шинах Michelin Pilot Sport 4S," +
          "так же есть зимняя липучка Continental Winter Contact TS860S SSR для этих же дисков.  Богатая комплектация: " +
          "Адаптивный круиз-контроль, люк, пакет M Technology, проекция, двойное остекление (в салоне тише, " +
          "чем во многих премиальных внедорожниках), лазерные фары, покрашенные."
      },
    }
  },
  {
    id: "15",
    carName: "BYD Song Plus Champion Edition",
    carPrice: "380987300",
    images: [
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fs_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_pr_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rst_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fql_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_eb1_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ca_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ds_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_shf_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rps_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_wc_izmo_1_1600x1067.avif",
    ],
    cardCardDetails: {
      statusCar: "В наличии",
      productionYear: "2020",
      mileage: "98 639 км",
      engine: "дизель, 3.0 л",
      kpp: "Автомат",
      privod: "полный",
      generation: "1 поколение",
      kits: "xDrive30d AT M Sport Plus",
      steeringWheel: "левый",
      body: "Внедорожник 5-дверный",
      color: "Черный",
      pts: "Оригинал",
      ownerByPTS: 1,
      condition: "Не требует ремонта",
      vinNumber: "WBAC64564ASDAWGRTDR3E2",
      ownerName: "АвтоЭксперт Премиум",
      ownerPhone: "+998 55 520 44 44",
      ownerAddress: " Узбекистан, г. Ташкент, Сергели-5, ТКАД, 62",
      description: {
        title: "Описание",
        body: " Куплена новой у официального дилера в РФ в конце декабря 2020 года. " +
          "По причине отъезда владельца заграницу сразу после покупки, с тех пор стояла в теплом, " +
          "сухом и охраняемом паркинге, лишь изредка использовалась и обслуживалась у ОД родственниками пенсионного возраста. " +
          "Ни разу не использовали Launch Control, никакого тюнинга, эксплуатация только в пределах скоростного лимита. " +
          "В салоне поставили оригинальную ковку M Performance (самые легкие диски для данного кузова) на шинах Michelin Pilot Sport 4S," +
          "так же есть зимняя липучка Continental Winter Contact TS860S SSR для этих же дисков.  Богатая комплектация: " +
          "Адаптивный круиз-контроль, люк, пакет M Technology, проекция, двойное остекление (в салоне тише, " +
          "чем во многих премиальных внедорожниках), лазерные фары, покрашенные."
      },
    }
  },
  {
    id: "16",
    carName: "BYD Song Plus Champion Edition",
    carPrice: "380987300",
    images: [
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fs_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_pr_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rst_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fql_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_eb1_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ca_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ds_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_shf_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rps_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_wc_izmo_1_1600x1067.avif",
    ],
    cardCardDetails: {
      statusCar: "В наличии",
      productionYear: "2020",
      mileage: "98 639 км",
      engine: "дизель, 3.0 л",
      kpp: "Автомат",
      privod: "полный",
      generation: "1 поколение",
      kits: "xDrive30d AT M Sport Plus",
      steeringWheel: "левый",
      body: "Внедорожник 5-дверный",
      color: "Черный",
      pts: "Оригинал",
      ownerByPTS: 1,
      condition: "Не требует ремонта",
      vinNumber: "WBAC64564ASDAWGRTDR3E2",
      ownerName: "АвтоЭксперт Премиум",
      ownerPhone: "+998 55 520 44 44",
      ownerAddress: " Узбекистан, г. Ташкент, Сергели-5, ТКАД, 62",
      description: {
        title: "Описание",
        body: " Куплена новой у официального дилера в РФ в конце декабря 2020 года. " +
          "По причине отъезда владельца заграницу сразу после покупки, с тех пор стояла в теплом, " +
          "сухом и охраняемом паркинге, лишь изредка использовалась и обслуживалась у ОД родственниками пенсионного возраста. " +
          "Ни разу не использовали Launch Control, никакого тюнинга, эксплуатация только в пределах скоростного лимита. " +
          "В салоне поставили оригинальную ковку M Performance (самые легкие диски для данного кузова) на шинах Michelin Pilot Sport 4S," +
          "так же есть зимняя липучка Continental Winter Contact TS860S SSR для этих же дисков.  Богатая комплектация: " +
          "Адаптивный круиз-контроль, люк, пакет M Technology, проекция, двойное остекление (в салоне тише, " +
          "чем во многих премиальных внедорожниках), лазерные фары, покрашенные."
      },
    }
  },
  {
    id: "17",
    carName: "BYD Song Plus Champion Edition",
    carPrice: "380987300",
    images: [
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fs_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_pr_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rst_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fql_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_eb1_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ca_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ds_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_shf_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rps_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_wc_izmo_1_1600x1067.avif",
    ],
    cardCardDetails: {
      statusCar: "В наличии",
      productionYear: "2020",
      mileage: "98 639 км",
      engine: "дизель, 3.0 л",
      kpp: "Автомат",
      privod: "полный",
      generation: "1 поколение",
      kits: "xDrive30d AT M Sport Plus",
      steeringWheel: "левый",
      body: "Внедорожник 5-дверный",
      color: "Черный",
      pts: "Оригинал",
      ownerByPTS: 1,
      condition: "Не требует ремонта",
      vinNumber: "WBAC64564ASDAWGRTDR3E2",
      ownerName: "АвтоЭксперт Премиум",
      ownerPhone: "+998 55 520 44 44",
      ownerAddress: " Узбекистан, г. Ташкент, Сергели-5, ТКАД, 62",
      description: {
        title: "Описание",
        body: " Куплена новой у официального дилера в РФ в конце декабря 2020 года. " +
          "По причине отъезда владельца заграницу сразу после покупки, с тех пор стояла в теплом, " +
          "сухом и охраняемом паркинге, лишь изредка использовалась и обслуживалась у ОД родственниками пенсионного возраста. " +
          "Ни разу не использовали Launch Control, никакого тюнинга, эксплуатация только в пределах скоростного лимита. " +
          "В салоне поставили оригинальную ковку M Performance (самые легкие диски для данного кузова) на шинах Michelin Pilot Sport 4S," +
          "так же есть зимняя липучка Continental Winter Contact TS860S SSR для этих же дисков.  Богатая комплектация: " +
          "Адаптивный круиз-контроль, люк, пакет M Technology, проекция, двойное остекление (в салоне тише, " +
          "чем во многих премиальных внедорожниках), лазерные фары, покрашенные."
      },
    }
  },
  {
    id: "18",
    carName: "BYD Song Plus Champion Edition",
    carPrice: "380987300",
    images: [
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fs_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_pr_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rst_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fql_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_eb1_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ca_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ds_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_shf_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rps_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_wc_izmo_1_1600x1067.avif",
    ],
    cardCardDetails: {
      statusCar: "В наличии",
      productionYear: "2020",
      mileage: "98 639 км",
      engine: "дизель, 3.0 л",
      kpp: "Автомат",
      privod: "полный",
      generation: "1 поколение",
      kits: "xDrive30d AT M Sport Plus",
      steeringWheel: "левый",
      body: "Внедорожник 5-дверный",
      color: "Черный",
      pts: "Оригинал",
      ownerByPTS: 1,
      condition: "Не требует ремонта",
      vinNumber: "WBAC64564ASDAWGRTDR3E2",
      ownerName: "АвтоЭксперт Премиум",
      ownerPhone: "+998 55 520 44 44",
      ownerAddress: " Узбекистан, г. Ташкент, Сергели-5, ТКАД, 62",
      description: {
        title: "Описание",
        body: " Куплена новой у официального дилера в РФ в конце декабря 2020 года. " +
          "По причине отъезда владельца заграницу сразу после покупки, с тех пор стояла в теплом, " +
          "сухом и охраняемом паркинге, лишь изредка использовалась и обслуживалась у ОД родственниками пенсионного возраста. " +
          "Ни разу не использовали Launch Control, никакого тюнинга, эксплуатация только в пределах скоростного лимита. " +
          "В салоне поставили оригинальную ковку M Performance (самые легкие диски для данного кузова) на шинах Michelin Pilot Sport 4S," +
          "так же есть зимняя липучка Continental Winter Contact TS860S SSR для этих же дисков.  Богатая комплектация: " +
          "Адаптивный круиз-контроль, люк, пакет M Technology, проекция, двойное остекление (в салоне тише, " +
          "чем во многих премиальных внедорожниках), лазерные фары, покрашенные."
      },
    }
  },
  {
    id: "19",
    carName: "BYD Song Plus Champion Edition",
    carPrice: "380987300",
    images: [
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fs_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_pr_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rst_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fql_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_eb1_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ca_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ds_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_shf_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rps_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_wc_izmo_1_1600x1067.avif",
    ],
    cardCardDetails: {
      statusCar: "В наличии",
      productionYear: "2020",
      mileage: "98 639 км",
      engine: "дизель, 3.0 л",
      kpp: "Автомат",
      privod: "полный",
      generation: "1 поколение",
      kits: "xDrive30d AT M Sport Plus",
      steeringWheel: "левый",
      body: "Внедорожник 5-дверный",
      color: "Черный",
      pts: "Оригинал",
      ownerByPTS: 1,
      condition: "Не требует ремонта",
      vinNumber: "WBAC64564ASDAWGRTDR3E2",
      ownerName: "АвтоЭксперт Премиум",
      ownerPhone: "+998 55 520 44 44",
      ownerAddress: " Узбекистан, г. Ташкент, Сергели-5, ТКАД, 62",
      description: {
        title: "Описание",
        body: " Куплена новой у официального дилера в РФ в конце декабря 2020 года. " +
          "По причине отъезда владельца заграницу сразу после покупки, с тех пор стояла в теплом, " +
          "сухом и охраняемом паркинге, лишь изредка использовалась и обслуживалась у ОД родственниками пенсионного возраста. " +
          "Ни разу не использовали Launch Control, никакого тюнинга, эксплуатация только в пределах скоростного лимита. " +
          "В салоне поставили оригинальную ковку M Performance (самые легкие диски для данного кузова) на шинах Michelin Pilot Sport 4S," +
          "так же есть зимняя липучка Continental Winter Contact TS860S SSR для этих же дисков.  Богатая комплектация: " +
          "Адаптивный круиз-контроль, люк, пакет M Technology, проекция, двойное остекление (в салоне тише, " +
          "чем во многих премиальных внедорожниках), лазерные фары, покрашенные."
      },
    }
  },
  {
    id: "20",
    carName: "BYD Song Plus Champion Edition",
    carPrice: "380987300",
    images: [
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fs_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_pr_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rst_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fql_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_eb1_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ca_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ds_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_shf_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rps_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_wc_izmo_1_1600x1067.avif",
    ],
    cardCardDetails: {
      statusCar: "В наличии",
      productionYear: "2020",
      mileage: "98 639 км",
      engine: "дизель, 3.0 л",
      kpp: "Автомат",
      privod: "полный",
      generation: "1 поколение",
      kits: "xDrive30d AT M Sport Plus",
      steeringWheel: "левый",
      body: "Внедорожник 5-дверный",
      color: "Черный",
      pts: "Оригинал",
      ownerByPTS: 1,
      condition: "Не требует ремонта",
      vinNumber: "WBAC64564ASDAWGRTDR3E2",
      ownerName: "АвтоЭксперт Премиум",
      ownerPhone: "+998 55 520 44 44",
      ownerAddress: " Узбекистан, г. Ташкент, Сергели-5, ТКАД, 62",
      description: {
        title: "Описание",
        body: " Куплена новой у официального дилера в РФ в конце декабря 2020 года. " +
          "По причине отъезда владельца заграницу сразу после покупки, с тех пор стояла в теплом, " +
          "сухом и охраняемом паркинге, лишь изредка использовалась и обслуживалась у ОД родственниками пенсионного возраста. " +
          "Ни разу не использовали Launch Control, никакого тюнинга, эксплуатация только в пределах скоростного лимита. " +
          "В салоне поставили оригинальную ковку M Performance (самые легкие диски для данного кузова) на шинах Michelin Pilot Sport 4S," +
          "так же есть зимняя липучка Continental Winter Contact TS860S SSR для этих же дисков.  Богатая комплектация: " +
          "Адаптивный круиз-контроль, люк, пакет M Technology, проекция, двойное остекление (в салоне тише, " +
          "чем во многих премиальных внедорожниках), лазерные фары, покрашенные."
      },
    }
  },
  {
    id: "21",
    carName: "BYD Song Plus Champion Edition",
    carPrice: "380987300",
    images: [
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fs_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_pr_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rst_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fql_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_eb1_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ca_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ds_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_shf_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rps_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_wc_izmo_1_1600x1067.avif",
    ],
    cardCardDetails: {
      statusCar: "В наличии",
      productionYear: "2020",
      mileage: "98 639 км",
      engine: "дизель, 3.0 л",
      kpp: "Автомат",
      privod: "полный",
      generation: "1 поколение",
      kits: "xDrive30d AT M Sport Plus",
      steeringWheel: "левый",
      body: "Внедорожник 5-дверный",
      color: "Черный",
      pts: "Оригинал",
      ownerByPTS: 1,
      condition: "Не требует ремонта",
      vinNumber: "WBAC64564ASDAWGRTDR3E2",
      ownerName: "АвтоЭксперт Премиум",
      ownerPhone: "+998 55 520 44 44",
      ownerAddress: " Узбекистан, г. Ташкент, Сергели-5, ТКАД, 62",
      description: {
        title: "Описание",
        body: " Куплена новой у официального дилера в РФ в конце декабря 2020 года. " +
          "По причине отъезда владельца заграницу сразу после покупки, с тех пор стояла в теплом, " +
          "сухом и охраняемом паркинге, лишь изредка использовалась и обслуживалась у ОД родственниками пенсионного возраста. " +
          "Ни разу не использовали Launch Control, никакого тюнинга, эксплуатация только в пределах скоростного лимита. " +
          "В салоне поставили оригинальную ковку M Performance (самые легкие диски для данного кузова) на шинах Michelin Pilot Sport 4S," +
          "так же есть зимняя липучка Continental Winter Contact TS860S SSR для этих же дисков.  Богатая комплектация: " +
          "Адаптивный круиз-контроль, люк, пакет M Technology, проекция, двойное остекление (в салоне тише, " +
          "чем во многих премиальных внедорожниках), лазерные фары, покрашенные."
      },
    }
  },
  {
    id: "22",
    carName: "BYD Song Plus Champion Edition",
    carPrice: "380987300",
    images: [
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fs_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_pr_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rst_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fql_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_eb1_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ca_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ds_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_shf_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rps_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_wc_izmo_1_1600x1067.avif",
    ],
    cardCardDetails: {
      statusCar: "В наличии",
      productionYear: "2020",
      mileage: "98 639 км",
      engine: "дизель, 3.0 л",
      kpp: "Автомат",
      privod: "полный",
      generation: "1 поколение",
      kits: "xDrive30d AT M Sport Plus",
      steeringWheel: "левый",
      body: "Внедорожник 5-дверный",
      color: "Черный",
      pts: "Оригинал",
      ownerByPTS: 1,
      condition: "Не требует ремонта",
      vinNumber: "WBAC64564ASDAWGRTDR3E2",
      ownerName: "АвтоЭксперт Премиум",
      ownerPhone: "+998 55 520 44 44",
      ownerAddress: " Узбекистан, г. Ташкент, Сергели-5, ТКАД, 62",
      description: {
        title: "Описание",
        body: " Куплена новой у официального дилера в РФ в конце декабря 2020 года. " +
          "По причине отъезда владельца заграницу сразу после покупки, с тех пор стояла в теплом, " +
          "сухом и охраняемом паркинге, лишь изредка использовалась и обслуживалась у ОД родственниками пенсионного возраста. " +
          "Ни разу не использовали Launch Control, никакого тюнинга, эксплуатация только в пределах скоростного лимита. " +
          "В салоне поставили оригинальную ковку M Performance (самые легкие диски для данного кузова) на шинах Michelin Pilot Sport 4S," +
          "так же есть зимняя липучка Continental Winter Contact TS860S SSR для этих же дисков.  Богатая комплектация: " +
          "Адаптивный круиз-контроль, люк, пакет M Technology, проекция, двойное остекление (в салоне тише, " +
          "чем во многих премиальных внедорожниках), лазерные фары, покрашенные."
      },
    }
  },
  {
    id: "23",
    carName: "BYD Song Plus Champion Edition",
    carPrice: "380987300",
    images: [
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fs_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_pr_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rst_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fql_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_eb1_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ca_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ds_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_shf_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rps_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_wc_izmo_1_1600x1067.avif",
    ],
    cardCardDetails: {
      statusCar: "В наличии",
      productionYear: "2020",
      mileage: "98 639 км",
      engine: "дизель, 3.0 л",
      kpp: "Автомат",
      privod: "полный",
      generation: "1 поколение",
      kits: "xDrive30d AT M Sport Plus",
      steeringWheel: "левый",
      body: "Внедорожник 5-дверный",
      color: "Черный",
      pts: "Оригинал",
      ownerByPTS: 1,
      condition: "Не требует ремонта",
      vinNumber: "WBAC64564ASDAWGRTDR3E2",
      ownerName: "АвтоЭксперт Премиум",
      ownerPhone: "+998 55 520 44 44",
      ownerAddress: " Узбекистан, г. Ташкент, Сергели-5, ТКАД, 62",
      description: {
        title: "Описание",
        body: " Куплена новой у официального дилера в РФ в конце декабря 2020 года. " +
          "По причине отъезда владельца заграницу сразу после покупки, с тех пор стояла в теплом, " +
          "сухом и охраняемом паркинге, лишь изредка использовалась и обслуживалась у ОД родственниками пенсионного возраста. " +
          "Ни разу не использовали Launch Control, никакого тюнинга, эксплуатация только в пределах скоростного лимита. " +
          "В салоне поставили оригинальную ковку M Performance (самые легкие диски для данного кузова) на шинах Michelin Pilot Sport 4S," +
          "так же есть зимняя липучка Continental Winter Contact TS860S SSR для этих же дисков.  Богатая комплектация: " +
          "Адаптивный круиз-контроль, люк, пакет M Technology, проекция, двойное остекление (в салоне тише, " +
          "чем во многих премиальных внедорожниках), лазерные фары, покрашенные."
      },
    }
  },
  {
    id: "24",
    carName: "BYD Song Plus Champion Edition",
    carPrice: "380987300",
    images: [
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fs_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_pr_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rst_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fql_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_eb1_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ca_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ds_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_shf_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rps_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_wc_izmo_1_1600x1067.avif",
    ],
    cardCardDetails: {
      statusCar: "В наличии",
      productionYear: "2020",
      mileage: "98 639 км",
      engine: "дизель, 3.0 л",
      kpp: "Автомат",
      privod: "полный",
      generation: "1 поколение",
      kits: "xDrive30d AT M Sport Plus",
      steeringWheel: "левый",
      body: "Внедорожник 5-дверный",
      color: "Черный",
      pts: "Оригинал",
      ownerByPTS: 1,
      condition: "Не требует ремонта",
      vinNumber: "WBAC64564ASDAWGRTDR3E2",
      ownerName: "АвтоЭксперт Премиум",
      ownerPhone: "+998 55 520 44 44",
      ownerAddress: " Узбекистан, г. Ташкент, Сергели-5, ТКАД, 62",
      description: {
        title: "Описание",
        body: " Куплена новой у официального дилера в РФ в конце декабря 2020 года. " +
          "По причине отъезда владельца заграницу сразу после покупки, с тех пор стояла в теплом, " +
          "сухом и охраняемом паркинге, лишь изредка использовалась и обслуживалась у ОД родственниками пенсионного возраста. " +
          "Ни разу не использовали Launch Control, никакого тюнинга, эксплуатация только в пределах скоростного лимита. " +
          "В салоне поставили оригинальную ковку M Performance (самые легкие диски для данного кузова) на шинах Michelin Pilot Sport 4S," +
          "так же есть зимняя липучка Continental Winter Contact TS860S SSR для этих же дисков.  Богатая комплектация: " +
          "Адаптивный круиз-контроль, люк, пакет M Technology, проекция, двойное остекление (в салоне тише, " +
          "чем во многих премиальных внедорожниках), лазерные фары, покрашенные."
      },
    }
  },
  {
    id: "25",
    carName: "BYD Song Plus Champion Edition",
    carPrice: "380987300",
    images: [
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fs_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_pr_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rst_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fql_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_eb1_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ca_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ds_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_shf_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rps_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_wc_izmo_1_1600x1067.avif",
    ],
    cardCardDetails: {
      statusCar: "В наличии",
      productionYear: "2020",
      mileage: "98 639 км",
      engine: "дизель, 3.0 л",
      kpp: "Автомат",
      privod: "полный",
      generation: "1 поколение",
      kits: "xDrive30d AT M Sport Plus",
      steeringWheel: "левый",
      body: "Внедорожник 5-дверный",
      color: "Черный",
      pts: "Оригинал",
      ownerByPTS: 1,
      condition: "Не требует ремонта",
      vinNumber: "WBAC64564ASDAWGRTDR3E2",
      ownerName: "АвтоЭксперт Премиум",
      ownerPhone: "+998 55 520 44 44",
      ownerAddress: " Узбекистан, г. Ташкент, Сергели-5, ТКАД, 62",
      description: {
        title: "Описание",
        body: " Куплена новой у официального дилера в РФ в конце декабря 2020 года. " +
          "По причине отъезда владельца заграницу сразу после покупки, с тех пор стояла в теплом, " +
          "сухом и охраняемом паркинге, лишь изредка использовалась и обслуживалась у ОД родственниками пенсионного возраста. " +
          "Ни разу не использовали Launch Control, никакого тюнинга, эксплуатация только в пределах скоростного лимита. " +
          "В салоне поставили оригинальную ковку M Performance (самые легкие диски для данного кузова) на шинах Michelin Pilot Sport 4S," +
          "так же есть зимняя липучка Continental Winter Contact TS860S SSR для этих же дисков.  Богатая комплектация: " +
          "Адаптивный круиз-контроль, люк, пакет M Technology, проекция, двойное остекление (в салоне тише, " +
          "чем во многих премиальных внедорожниках), лазерные фары, покрашенные."
      },
    }
  },
  {
    id: "26",
    carName: "BYD Song Plus Champion Edition",
    carPrice: "380987300",
    images: [
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fs_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_pr_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rst_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fql_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_eb1_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ca_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ds_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_shf_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rps_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_wc_izmo_1_1600x1067.avif",
    ],
    cardCardDetails: {
      statusCar: "В наличии",
      productionYear: "2020",
      mileage: "98 639 км",
      engine: "дизель, 3.0 л",
      kpp: "Автомат",
      privod: "полный",
      generation: "1 поколение",
      kits: "xDrive30d AT M Sport Plus",
      steeringWheel: "левый",
      body: "Внедорожник 5-дверный",
      color: "Черный",
      pts: "Оригинал",
      ownerByPTS: 1,
      condition: "Не требует ремонта",
      vinNumber: "WBAC64564ASDAWGRTDR3E2",
      ownerName: "АвтоЭксперт Премиум",
      ownerPhone: "+998 55 520 44 44",
      ownerAddress: " Узбекистан, г. Ташкент, Сергели-5, ТКАД, 62",
      description: {
        title: "Описание",
        body: " Куплена новой у официального дилера в РФ в конце декабря 2020 года. " +
          "По причине отъезда владельца заграницу сразу после покупки, с тех пор стояла в теплом, " +
          "сухом и охраняемом паркинге, лишь изредка использовалась и обслуживалась у ОД родственниками пенсионного возраста. " +
          "Ни разу не использовали Launch Control, никакого тюнинга, эксплуатация только в пределах скоростного лимита. " +
          "В салоне поставили оригинальную ковку M Performance (самые легкие диски для данного кузова) на шинах Michelin Pilot Sport 4S," +
          "так же есть зимняя липучка Continental Winter Contact TS860S SSR для этих же дисков.  Богатая комплектация: " +
          "Адаптивный круиз-контроль, люк, пакет M Technology, проекция, двойное остекление (в салоне тише, " +
          "чем во многих премиальных внедорожниках), лазерные фары, покрашенные."
      },
    }
  },
  {
    id: "27",
    carName: "BYD Song Plus Champion Edition",
    carPrice: "380987300",
    images: [
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fs_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_pr_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rst_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fql_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_eb1_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ca_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ds_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_shf_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rps_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_wc_izmo_1_1600x1067.avif",
    ],
    cardCardDetails: {
      statusCar: "В наличии",
      productionYear: "2020",
      mileage: "98 639 км",
      engine: "дизель, 3.0 л",
      kpp: "Автомат",
      privod: "полный",
      generation: "1 поколение",
      kits: "xDrive30d AT M Sport Plus",
      steeringWheel: "левый",
      body: "Внедорожник 5-дверный",
      color: "Черный",
      pts: "Оригинал",
      ownerByPTS: 1,
      condition: "Не требует ремонта",
      vinNumber: "WBAC64564ASDAWGRTDR3E2",
      ownerName: "АвтоЭксперт Премиум",
      ownerPhone: "+998 55 520 44 44",
      ownerAddress: " Узбекистан, г. Ташкент, Сергели-5, ТКАД, 62",
      description: {
        title: "Описание",
        body: " Куплена новой у официального дилера в РФ в конце декабря 2020 года. " +
          "По причине отъезда владельца заграницу сразу после покупки, с тех пор стояла в теплом, " +
          "сухом и охраняемом паркинге, лишь изредка использовалась и обслуживалась у ОД родственниками пенсионного возраста. " +
          "Ни разу не использовали Launch Control, никакого тюнинга, эксплуатация только в пределах скоростного лимита. " +
          "В салоне поставили оригинальную ковку M Performance (самые легкие диски для данного кузова) на шинах Michelin Pilot Sport 4S," +
          "так же есть зимняя липучка Continental Winter Contact TS860S SSR для этих же дисков.  Богатая комплектация: " +
          "Адаптивный круиз-контроль, люк, пакет M Technology, проекция, двойное остекление (в салоне тише, " +
          "чем во многих премиальных внедорожниках), лазерные фары, покрашенные."
      },
    }
  },
  {
    id: "28",
    carName: "BYD Song Plus Champion Edition",
    carPrice: "380987300",
    images: [
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fs_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_pr_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rst_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fql_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_eb1_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ca_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ds_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_shf_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rps_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_wc_izmo_1_1600x1067.avif",
    ],
    cardCardDetails: {
      statusCar: "В наличии",
      productionYear: "2020",
      mileage: "98 639 км",
      engine: "дизель, 3.0 л",
      kpp: "Автомат",
      privod: "полный",
      generation: "1 поколение",
      kits: "xDrive30d AT M Sport Plus",
      steeringWheel: "левый",
      body: "Внедорожник 5-дверный",
      color: "Черный",
      pts: "Оригинал",
      ownerByPTS: 1,
      condition: "Не требует ремонта",
      vinNumber: "WBAC64564ASDAWGRTDR3E2",
      ownerName: "АвтоЭксперт Премиум",
      ownerPhone: "+998 55 520 44 44",
      ownerAddress: " Узбекистан, г. Ташкент, Сергели-5, ТКАД, 62",
      description: {
        title: "Описание",
        body: " Куплена новой у официального дилера в РФ в конце декабря 2020 года. " +
          "По причине отъезда владельца заграницу сразу после покупки, с тех пор стояла в теплом, " +
          "сухом и охраняемом паркинге, лишь изредка использовалась и обслуживалась у ОД родственниками пенсионного возраста. " +
          "Ни разу не использовали Launch Control, никакого тюнинга, эксплуатация только в пределах скоростного лимита. " +
          "В салоне поставили оригинальную ковку M Performance (самые легкие диски для данного кузова) на шинах Michelin Pilot Sport 4S," +
          "так же есть зимняя липучка Continental Winter Contact TS860S SSR для этих же дисков.  Богатая комплектация: " +
          "Адаптивный круиз-контроль, люк, пакет M Technology, проекция, двойное остекление (в салоне тише, " +
          "чем во многих премиальных внедорожниках), лазерные фары, покрашенные."
      },
    }
  },
  {
    id: "29",
    carName: "BYD Song Plus Champion Edition",
    carPrice: "380987300",
    images: [
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fs_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_pr_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rst_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fql_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_eb1_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ca_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ds_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_shf_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rps_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_wc_izmo_1_1600x1067.avif",
    ],
    cardCardDetails: {
      statusCar: "В наличии",
      productionYear: "2020",
      mileage: "98 639 км",
      engine: "дизель, 3.0 л",
      kpp: "Автомат",
      privod: "полный",
      generation: "1 поколение",
      kits: "xDrive30d AT M Sport Plus",
      steeringWheel: "левый",
      body: "Внедорожник 5-дверный",
      color: "Черный",
      pts: "Оригинал",
      ownerByPTS: 1,
      condition: "Не требует ремонта",
      vinNumber: "WBAC64564ASDAWGRTDR3E2",
      ownerName: "АвтоЭксперт Премиум",
      ownerPhone: "+998 55 520 44 44",
      ownerAddress: " Узбекистан, г. Ташкент, Сергели-5, ТКАД, 62",
      description: {
        title: "Описание",
        body: " Куплена новой у официального дилера в РФ в конце декабря 2020 года. " +
          "По причине отъезда владельца заграницу сразу после покупки, с тех пор стояла в теплом, " +
          "сухом и охраняемом паркинге, лишь изредка использовалась и обслуживалась у ОД родственниками пенсионного возраста. " +
          "Ни разу не использовали Launch Control, никакого тюнинга, эксплуатация только в пределах скоростного лимита. " +
          "В салоне поставили оригинальную ковку M Performance (самые легкие диски для данного кузова) на шинах Michelin Pilot Sport 4S," +
          "так же есть зимняя липучка Continental Winter Contact TS860S SSR для этих же дисков.  Богатая комплектация: " +
          "Адаптивный круиз-контроль, люк, пакет M Technology, проекция, двойное остекление (в салоне тише, " +
          "чем во многих премиальных внедорожниках), лазерные фары, покрашенные."
      },
    }
  },
  {
    id: "30",
    carName: "BYD Song Plus Champion Edition",
    carPrice: "380987300",
    images: [
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fs_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_pr_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rst_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fql_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_eb1_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ca_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ds_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_shf_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rps_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_wc_izmo_1_1600x1067.avif",
    ],
    cardCardDetails: {
      statusCar: "В наличии",
      productionYear: "2020",
      mileage: "98 639 км",
      engine: "дизель, 3.0 л",
      kpp: "Автомат",
      privod: "полный",
      generation: "1 поколение",
      kits: "xDrive30d AT M Sport Plus",
      steeringWheel: "левый",
      body: "Внедорожник 5-дверный",
      color: "Черный",
      pts: "Оригинал",
      ownerByPTS: 1,
      condition: "Не требует ремонта",
      vinNumber: "WBAC64564ASDAWGRTDR3E2",
      ownerName: "АвтоЭксперт Премиум",
      ownerPhone: "+998 55 520 44 44",
      ownerAddress: " Узбекистан, г. Ташкент, Сергели-5, ТКАД, 62",
      description: {
        title: "Описание",
        body: " Куплена новой у официального дилера в РФ в конце декабря 2020 года. " +
          "По причине отъезда владельца заграницу сразу после покупки, с тех пор стояла в теплом, " +
          "сухом и охраняемом паркинге, лишь изредка использовалась и обслуживалась у ОД родственниками пенсионного возраста. " +
          "Ни разу не использовали Launch Control, никакого тюнинга, эксплуатация только в пределах скоростного лимита. " +
          "В салоне поставили оригинальную ковку M Performance (самые легкие диски для данного кузова) на шинах Michelin Pilot Sport 4S," +
          "так же есть зимняя липучка Continental Winter Contact TS860S SSR для этих же дисков.  Богатая комплектация: " +
          "Адаптивный круиз-контроль, люк, пакет M Technology, проекция, двойное остекление (в салоне тише, " +
          "чем во многих премиальных внедорожниках), лазерные фары, покрашенные."
      },
    }
  },
  {
    id: "31",
    carName: "BYD Song Plus Champion Edition",
    carPrice: "380987300",
    images: [
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fs_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_pr_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rst_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fql_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_eb1_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ca_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ds_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_shf_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rps_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_wc_izmo_1_1600x1067.avif",
    ],
    cardCardDetails: {
      statusCar: "В наличии",
      productionYear: "2020",
      mileage: "98 639 км",
      engine: "дизель, 3.0 л",
      kpp: "Автомат",
      privod: "полный",
      generation: "1 поколение",
      kits: "xDrive30d AT M Sport Plus",
      steeringWheel: "левый",
      body: "Внедорожник 5-дверный",
      color: "Черный",
      pts: "Оригинал",
      ownerByPTS: 1,
      condition: "Не требует ремонта",
      vinNumber: "WBAC64564ASDAWGRTDR3E2",
      ownerName: "АвтоЭксперт Премиум",
      ownerPhone: "+998 55 520 44 44",
      ownerAddress: " Узбекистан, г. Ташкент, Сергели-5, ТКАД, 62",
      description: {
        title: "Описание",
        body: " Куплена новой у официального дилера в РФ в конце декабря 2020 года. " +
          "По причине отъезда владельца заграницу сразу после покупки, с тех пор стояла в теплом, " +
          "сухом и охраняемом паркинге, лишь изредка использовалась и обслуживалась у ОД родственниками пенсионного возраста. " +
          "Ни разу не использовали Launch Control, никакого тюнинга, эксплуатация только в пределах скоростного лимита. " +
          "В салоне поставили оригинальную ковку M Performance (самые легкие диски для данного кузова) на шинах Michelin Pilot Sport 4S," +
          "так же есть зимняя липучка Continental Winter Contact TS860S SSR для этих же дисков.  Богатая комплектация: " +
          "Адаптивный круиз-контроль, люк, пакет M Technology, проекция, двойное остекление (в салоне тише, " +
          "чем во многих премиальных внедорожниках), лазерные фары, покрашенные."
      },
    }
  },
  {
    id: "32",
    carName: "BYD Song Plus Champion Edition",
    carPrice: "380987300",
    images: [
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fs_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_pr_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rst_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fql_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_eb1_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ca_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ds_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_shf_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rps_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_wc_izmo_1_1600x1067.avif",
    ],
    cardCardDetails: {
      statusCar: "В наличии",
      productionYear: "2020",
      mileage: "98 639 км",
      engine: "дизель, 3.0 л",
      kpp: "Автомат",
      privod: "полный",
      generation: "1 поколение",
      kits: "xDrive30d AT M Sport Plus",
      steeringWheel: "левый",
      body: "Внедорожник 5-дверный",
      color: "Черный",
      pts: "Оригинал",
      ownerByPTS: 1,
      condition: "Не требует ремонта",
      vinNumber: "WBAC64564ASDAWGRTDR3E2",
      ownerName: "АвтоЭксперт Премиум",
      ownerPhone: "+998 55 520 44 44",
      ownerAddress: " Узбекистан, г. Ташкент, Сергели-5, ТКАД, 62",
      description: {
        title: "Описание",
        body: " Куплена новой у официального дилера в РФ в конце декабря 2020 года. " +
          "По причине отъезда владельца заграницу сразу после покупки, с тех пор стояла в теплом, " +
          "сухом и охраняемом паркинге, лишь изредка использовалась и обслуживалась у ОД родственниками пенсионного возраста. " +
          "Ни разу не использовали Launch Control, никакого тюнинга, эксплуатация только в пределах скоростного лимита. " +
          "В салоне поставили оригинальную ковку M Performance (самые легкие диски для данного кузова) на шинах Michelin Pilot Sport 4S," +
          "так же есть зимняя липучка Continental Winter Contact TS860S SSR для этих же дисков.  Богатая комплектация: " +
          "Адаптивный круиз-контроль, люк, пакет M Technology, проекция, двойное остекление (в салоне тише, " +
          "чем во многих премиальных внедорожниках), лазерные фары, покрашенные."
      },
    }
  },
  {
    id: "33",
    carName: "BYD Song Plus Champion Edition",
    carPrice: "380987300",
    images: [
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fs_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_pr_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rst_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fql_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_eb1_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ca_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ds_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_shf_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rps_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_wc_izmo_1_1600x1067.avif",
    ],
    cardCardDetails: {
      statusCar: "В наличии",
      productionYear: "2020",
      mileage: "98 639 км",
      engine: "дизель, 3.0 л",
      kpp: "Автомат",
      privod: "полный",
      generation: "1 поколение",
      kits: "xDrive30d AT M Sport Plus",
      steeringWheel: "левый",
      body: "Внедорожник 5-дверный",
      color: "Черный",
      pts: "Оригинал",
      ownerByPTS: 1,
      condition: "Не требует ремонта",
      vinNumber: "WBAC64564ASDAWGRTDR3E2",
      ownerName: "АвтоЭксперт Премиум",
      ownerPhone: "+998 55 520 44 44",
      ownerAddress: " Узбекистан, г. Ташкент, Сергели-5, ТКАД, 62",
      description: {
        title: "Описание",
        body: " Куплена новой у официального дилера в РФ в конце декабря 2020 года. " +
          "По причине отъезда владельца заграницу сразу после покупки, с тех пор стояла в теплом, " +
          "сухом и охраняемом паркинге, лишь изредка использовалась и обслуживалась у ОД родственниками пенсионного возраста. " +
          "Ни разу не использовали Launch Control, никакого тюнинга, эксплуатация только в пределах скоростного лимита. " +
          "В салоне поставили оригинальную ковку M Performance (самые легкие диски для данного кузова) на шинах Michelin Pilot Sport 4S," +
          "так же есть зимняя липучка Continental Winter Contact TS860S SSR для этих же дисков.  Богатая комплектация: " +
          "Адаптивный круиз-контроль, люк, пакет M Technology, проекция, двойное остекление (в салоне тише, " +
          "чем во многих премиальных внедорожниках), лазерные фары, покрашенные."
      },
    }
  },
  {
    id: "34",
    carName: "BYD Song Plus Champion Edition",
    carPrice: "380987300",
    images:[
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fs_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_pr_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rst_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fql_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_eb1_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ca_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ds_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_shf_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rps_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_wc_izmo_1_1600x1067.avif",
    ],
    cardCardDetails: {
      statusCar: "В наличии",
      productionYear: "2020",
      mileage: "98 639 км",
      engine: "дизель, 3.0 л",
      kpp: "Автомат",
      privod: "полный",
      generation: "1 поколение",
      kits: "xDrive30d AT M Sport Plus",
      steeringWheel: "левый",
      body: "Внедорожник 5-дверный",
      color: "Черный",
      pts: "Оригинал",
      ownerByPTS: 1,
      condition: "Не требует ремонта",
      vinNumber: "WBAC64564ASDAWGRTDR3E2",
      ownerName: "АвтоЭксперт Премиум",
      ownerPhone: "+998 55 520 44 44",
      ownerAddress: " Узбекистан, г. Ташкент, Сергели-5, ТКАД, 62",
      description: {
        title: "Описание",
        body: " Куплена новой у официального дилера в РФ в конце декабря 2020 года. " +
          "По причине отъезда владельца заграницу сразу после покупки, с тех пор стояла в теплом, " +
          "сухом и охраняемом паркинге, лишь изредка использовалась и обслуживалась у ОД родственниками пенсионного возраста. " +
          "Ни разу не использовали Launch Control, никакого тюнинга, эксплуатация только в пределах скоростного лимита. " +
          "В салоне поставили оригинальную ковку M Performance (самые легкие диски для данного кузова) на шинах Michelin Pilot Sport 4S," +
          "так же есть зимняя липучка Continental Winter Contact TS860S SSR для этих же дисков.  Богатая комплектация: " +
          "Адаптивный круиз-контроль, люк, пакет M Technology, проекция, двойное остекление (в салоне тише, " +
          "чем во многих премиальных внедорожниках), лазерные фары, покрашенные."
      },
    }
  },
  {
    id: "35",
    carName: "BYD Song Plus Champion Edition",
    carPrice: "380987300",
    images: [
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fs_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_pr_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rst_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fql_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_eb1_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ca_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ds_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_shf_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rps_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_wc_izmo_1_1600x1067.avif",
    ],
    cardCardDetails: {
      statusCar: "В наличии",
      productionYear: "2020",
      mileage: "98 639 км",
      engine: "дизель, 3.0 л",
      kpp: "Автомат",
      privod: "полный",
      generation: "1 поколение",
      kits: "xDrive30d AT M Sport Plus",
      steeringWheel: "левый",
      body: "Внедорожник 5-дверный",
      color: "Черный",
      pts: "Оригинал",
      ownerByPTS: 1,
      condition: "Не требует ремонта",
      vinNumber: "WBAC64564ASDAWGRTDR3E2",
      ownerName: "АвтоЭксперт Премиум",
      ownerPhone: "+998 55 520 44 44",
      ownerAddress: " Узбекистан, г. Ташкент, Сергели-5, ТКАД, 62",
      description: {
        title: "Описание",
        body: " Куплена новой у официального дилера в РФ в конце декабря 2020 года. " +
          "По причине отъезда владельца заграницу сразу после покупки, с тех пор стояла в теплом, " +
          "сухом и охраняемом паркинге, лишь изредка использовалась и обслуживалась у ОД родственниками пенсионного возраста. " +
          "Ни разу не использовали Launch Control, никакого тюнинга, эксплуатация только в пределах скоростного лимита. " +
          "В салоне поставили оригинальную ковку M Performance (самые легкие диски для данного кузова) на шинах Michelin Pilot Sport 4S," +
          "так же есть зимняя липучка Continental Winter Contact TS860S SSR для этих же дисков.  Богатая комплектация: " +
          "Адаптивный круиз-контроль, люк, пакет M Technology, проекция, двойное остекление (в салоне тише, " +
          "чем во многих премиальных внедорожниках), лазерные фары, покрашенные."
      },
    }
  },
  {
    id: "36",
    carName: "BYD Song Plus Champion Edition",
    carPrice: "380987300",
    images: [
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fs_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_pr_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rst_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fql_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_eb1_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ca_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ds_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_shf_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rps_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_wc_izmo_1_1600x1067.avif",
    ],
    cardCardDetails: {
      statusCar: "В наличии",
      productionYear: "2020",
      mileage: "98 639 км",
      engine: "дизель, 3.0 л",
      kpp: "Автомат",
      privod: "полный",
      generation: "1 поколение",
      kits: "xDrive30d AT M Sport Plus",
      steeringWheel: "левый",
      body: "Внедорожник 5-дверный",
      color: "Черный",
      pts: "Оригинал",
      ownerByPTS: 1,
      condition: "Не требует ремонта",
      vinNumber: "WBAC64564ASDAWGRTDR3E2",
      ownerName: "АвтоЭксперт Премиум",
      ownerPhone: "+998 55 520 44 44",
      ownerAddress: " Узбекистан, г. Ташкент, Сергели-5, ТКАД, 62",
      description: {
        title: "Описание",
        body: " Куплена новой у официального дилера в РФ в конце декабря 2020 года. " +
          "По причине отъезда владельца заграницу сразу после покупки, с тех пор стояла в теплом, " +
          "сухом и охраняемом паркинге, лишь изредка использовалась и обслуживалась у ОД родственниками пенсионного возраста. " +
          "Ни разу не использовали Launch Control, никакого тюнинга, эксплуатация только в пределах скоростного лимита. " +
          "В салоне поставили оригинальную ковку M Performance (самые легкие диски для данного кузова) на шинах Michelin Pilot Sport 4S," +
          "так же есть зимняя липучка Continental Winter Contact TS860S SSR для этих же дисков.  Богатая комплектация: " +
          "Адаптивный круиз-контроль, люк, пакет M Technology, проекция, двойное остекление (в салоне тише, " +
          "чем во многих премиальных внедорожниках), лазерные фары, покрашенные."
      },
    }
  },
  {
    id: "37",
    carName: "BYD Song Plus Champion Edition",
    carPrice: "380987300",
    images: [
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fs_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_pr_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rst_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fql_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_eb1_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ca_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ds_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_shf_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rps_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_wc_izmo_1_1600x1067.avif",
    ],
    cardCardDetails: {
      statusCar: "В наличии",
      productionYear: "2020",
      mileage: "98 639 км",
      engine: "дизель, 3.0 л",
      kpp: "Автомат",
      privod: "полный",
      generation: "1 поколение",
      kits: "xDrive30d AT M Sport Plus",
      steeringWheel: "левый",
      body: "Внедорожник 5-дверный",
      color: "Черный",
      pts: "Оригинал",
      ownerByPTS: 1,
      condition: "Не требует ремонта",
      vinNumber: "WBAC64564ASDAWGRTDR3E2",
      ownerName: "АвтоЭксперт Премиум",
      ownerPhone: "+998 55 520 44 44",
      ownerAddress: " Узбекистан, г. Ташкент, Сергели-5, ТКАД, 62",
      description: {
        title: "Описание",
        body: " Куплена новой у официального дилера в РФ в конце декабря 2020 года. " +
          "По причине отъезда владельца заграницу сразу после покупки, с тех пор стояла в теплом, " +
          "сухом и охраняемом паркинге, лишь изредка использовалась и обслуживалась у ОД родственниками пенсионного возраста. " +
          "Ни разу не использовали Launch Control, никакого тюнинга, эксплуатация только в пределах скоростного лимита. " +
          "В салоне поставили оригинальную ковку M Performance (самые легкие диски для данного кузова) на шинах Michelin Pilot Sport 4S," +
          "так же есть зимняя липучка Continental Winter Contact TS860S SSR для этих же дисков.  Богатая комплектация: " +
          "Адаптивный круиз-контроль, люк, пакет M Technology, проекция, двойное остекление (в салоне тише, " +
          "чем во многих премиальных внедорожниках), лазерные фары, покрашенные."
      },
    }
  },
  {
    id: "38",
    carName: "BYD Song Plus Champion Edition",
    carPrice: "380987300",
    images: [
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fs_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_pr_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rst_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fql_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_eb1_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ca_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ds_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_shf_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rps_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_wc_izmo_1_1600x1067.avif",
    ],
    cardCardDetails: {
      statusCar: "В наличии",
      productionYear: "2020",
      mileage: "98 639 км",
      engine: "дизель, 3.0 л",
      kpp: "Автомат",
      privod: "полный",
      generation: "1 поколение",
      kits: "xDrive30d AT M Sport Plus",
      steeringWheel: "левый",
      body: "Внедорожник 5-дверный",
      color: "Черный",
      pts: "Оригинал",
      ownerByPTS: 1,
      condition: "Не требует ремонта",
      vinNumber: "WBAC64564ASDAWGRTDR3E2",
      ownerName: "АвтоЭксперт Премиум",
      ownerPhone: "+998 55 520 44 44",
      ownerAddress: " Узбекистан, г. Ташкент, Сергели-5, ТКАД, 62",
      description: {
        title: "Описание",
        body: " Куплена новой у официального дилера в РФ в конце декабря 2020 года. " +
          "По причине отъезда владельца заграницу сразу после покупки, с тех пор стояла в теплом, " +
          "сухом и охраняемом паркинге, лишь изредка использовалась и обслуживалась у ОД родственниками пенсионного возраста. " +
          "Ни разу не использовали Launch Control, никакого тюнинга, эксплуатация только в пределах скоростного лимита. " +
          "В салоне поставили оригинальную ковку M Performance (самые легкие диски для данного кузова) на шинах Michelin Pilot Sport 4S," +
          "так же есть зимняя липучка Continental Winter Contact TS860S SSR для этих же дисков.  Богатая комплектация: " +
          "Адаптивный круиз-контроль, люк, пакет M Technology, проекция, двойное остекление (в салоне тише, " +
          "чем во многих премиальных внедорожниках), лазерные фары, покрашенные."
      },
    }
  },
  {
    id: "39",
    carName: "BYD Song Plus Champion Edition",
    carPrice: "380987300",
    images: [
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fs_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_pr_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rst_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fql_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_eb1_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ca_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ds_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_shf_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rps_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_wc_izmo_1_1600x1067.avif",
    ],
    cardCardDetails: {
      statusCar: "В наличии",
      productionYear: "2020",
      mileage: "98 639 км",
      engine: "дизель, 3.0 л",
      kpp: "Автомат",
      privod: "полный",
      generation: "1 поколение",
      kits: "xDrive30d AT M Sport Plus",
      steeringWheel: "левый",
      body: "Внедорожник 5-дверный",
      color: "Черный",
      pts: "Оригинал",
      ownerByPTS: 1,
      condition: "Не требует ремонта",
      vinNumber: "WBAC64564ASDAWGRTDR3E2",
      ownerName: "АвтоЭксперт Премиум",
      ownerPhone: "+998 55 520 44 44",
      ownerAddress: " Узбекистан, г. Ташкент, Сергели-5, ТКАД, 62",
      description: {
        title: "Описание",
        body: " Куплена новой у официального дилера в РФ в конце декабря 2020 года. " +
          "По причине отъезда владельца заграницу сразу после покупки, с тех пор стояла в теплом, " +
          "сухом и охраняемом паркинге, лишь изредка использовалась и обслуживалась у ОД родственниками пенсионного возраста. " +
          "Ни разу не использовали Launch Control, никакого тюнинга, эксплуатация только в пределах скоростного лимита. " +
          "В салоне поставили оригинальную ковку M Performance (самые легкие диски для данного кузова) на шинах Michelin Pilot Sport 4S," +
          "так же есть зимняя липучка Continental Winter Contact TS860S SSR для этих же дисков.  Богатая комплектация: " +
          "Адаптивный круиз-контроль, люк, пакет M Technology, проекция, двойное остекление (в салоне тише, " +
          "чем во многих премиальных внедорожниках), лазерные фары, покрашенные."
      },
    }
  },
  {
    id: "40",
    carName: "BYD Song Plus Champion Edition",
    carPrice: "380987300",
    images: [
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fs_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_pr_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rst_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fql_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_eb1_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ca_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ds_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_shf_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rps_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_wc_izmo_1_1600x1067.avif",
    ],
    cardCardDetails: {
      statusCar: "В наличии",
      productionYear: "2020",
      mileage: "98 639 км",
      engine: "дизель, 3.0 л",
      kpp: "Автомат",
      privod: "полный",
      generation: "1 поколение",
      kits: "xDrive30d AT M Sport Plus",
      steeringWheel: "левый",
      body: "Внедорожник 5-дверный",
      color: "Черный",
      pts: "Оригинал",
      ownerByPTS: 1,
      condition: "Не требует ремонта",
      vinNumber: "WBAC64564ASDAWGRTDR3E2",
      ownerName: "АвтоЭксперт Премиум",
      ownerPhone: "+998 55 520 44 44",
      ownerAddress: " Узбекистан, г. Ташкент, Сергели-5, ТКАД, 62",
      description: {
        title: "Описание",
        body: " Куплена новой у официального дилера в РФ в конце декабря 2020 года. " +
          "По причине отъезда владельца заграницу сразу после покупки, с тех пор стояла в теплом, " +
          "сухом и охраняемом паркинге, лишь изредка использовалась и обслуживалась у ОД родственниками пенсионного возраста. " +
          "Ни разу не использовали Launch Control, никакого тюнинга, эксплуатация только в пределах скоростного лимита. " +
          "В салоне поставили оригинальную ковку M Performance (самые легкие диски для данного кузова) на шинах Michelin Pilot Sport 4S," +
          "так же есть зимняя липучка Continental Winter Contact TS860S SSR для этих же дисков.  Богатая комплектация: " +
          "Адаптивный круиз-контроль, люк, пакет M Technology, проекция, двойное остекление (в салоне тише, " +
          "чем во многих премиальных внедорожниках), лазерные фары, покрашенные."
      },
    }
  },
  {
    id: "41",
    carName: "BYD Song Plus Champion Edition",
    carPrice: "380987300",
    images: [
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fs_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_pr_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rst_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fql_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_eb1_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ca_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ds_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_shf_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rps_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_wc_izmo_1_1600x1067.avif",
    ],
    cardCardDetails: {
      statusCar: "В наличии",
      productionYear: "2020",
      mileage: "98 639 км",
      engine: "дизель, 3.0 л",
      kpp: "Автомат",
      privod: "полный",
      generation: "1 поколение",
      kits: "xDrive30d AT M Sport Plus",
      steeringWheel: "левый",
      body: "Внедорожник 5-дверный",
      color: "Черный",
      pts: "Оригинал",
      ownerByPTS: 1,
      condition: "Не требует ремонта",
      vinNumber: "WBAC64564ASDAWGRTDR3E2",
      ownerName: "АвтоЭксперт Премиум",
      ownerPhone: "+998 55 520 44 44",
      ownerAddress: " Узбекистан, г. Ташкент, Сергели-5, ТКАД, 62",
      description: {
        title: "Описание",
        body: " Куплена новой у официального дилера в РФ в конце декабря 2020 года. " +
          "По причине отъезда владельца заграницу сразу после покупки, с тех пор стояла в теплом, " +
          "сухом и охраняемом паркинге, лишь изредка использовалась и обслуживалась у ОД родственниками пенсионного возраста. " +
          "Ни разу не использовали Launch Control, никакого тюнинга, эксплуатация только в пределах скоростного лимита. " +
          "В салоне поставили оригинальную ковку M Performance (самые легкие диски для данного кузова) на шинах Michelin Pilot Sport 4S," +
          "так же есть зимняя липучка Continental Winter Contact TS860S SSR для этих же дисков.  Богатая комплектация: " +
          "Адаптивный круиз-контроль, люк, пакет M Technology, проекция, двойное остекление (в салоне тише, " +
          "чем во многих премиальных внедорожниках), лазерные фары, покрашенные."
      },
    }
  },
  {
    id: "42",
    carName: "BYD Song Plus Champion Edition",
    carPrice: "380987300",
    images: [
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fs_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_pr_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rst_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fql_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_eb1_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ca_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ds_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_shf_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rps_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_wc_izmo_1_1600x1067.avif",
    ],
    cardCardDetails: {
      statusCar: "В наличии",
      productionYear: "2020",
      mileage: "98 639 км",
      engine: "дизель, 3.0 л",
      kpp: "Автомат",
      privod: "полный",
      generation: "1 поколение",
      kits: "xDrive30d AT M Sport Plus",
      steeringWheel: "левый",
      body: "Внедорожник 5-дверный",
      color: "Черный",
      pts: "Оригинал",
      ownerByPTS: 1,
      condition: "Не требует ремонта",
      vinNumber: "WBAC64564ASDAWGRTDR3E2",
      ownerName: "АвтоЭксперт Премиум",
      ownerPhone: "+998 55 520 44 44",
      ownerAddress: " Узбекистан, г. Ташкент, Сергели-5, ТКАД, 62",
      description: {
        title: "Описание",
        body: " Куплена новой у официального дилера в РФ в конце декабря 2020 года. " +
          "По причине отъезда владельца заграницу сразу после покупки, с тех пор стояла в теплом, " +
          "сухом и охраняемом паркинге, лишь изредка использовалась и обслуживалась у ОД родственниками пенсионного возраста. " +
          "Ни разу не использовали Launch Control, никакого тюнинга, эксплуатация только в пределах скоростного лимита. " +
          "В салоне поставили оригинальную ковку M Performance (самые легкие диски для данного кузова) на шинах Michelin Pilot Sport 4S," +
          "так же есть зимняя липучка Continental Winter Contact TS860S SSR для этих же дисков.  Богатая комплектация: " +
          "Адаптивный круиз-контроль, люк, пакет M Technology, проекция, двойное остекление (в салоне тише, " +
          "чем во многих премиальных внедорожниках), лазерные фары, покрашенные."
      },
    }
  },
  {
    id: "43",
    carName: "BYD Song Plus Champion Edition",
    carPrice: "380987300",
    images: [
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fs_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_pr_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rst_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fql_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_eb1_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ca_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ds_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_shf_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rps_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_wc_izmo_1_1600x1067.avif",
    ],
    cardCardDetails: {
      statusCar: "В наличии",
      productionYear: "2020",
      mileage: "98 639 км",
      engine: "дизель, 3.0 л",
      kpp: "Автомат",
      privod: "полный",
      generation: "1 поколение",
      kits: "xDrive30d AT M Sport Plus",
      steeringWheel: "левый",
      body: "Внедорожник 5-дверный",
      color: "Черный",
      pts: "Оригинал",
      ownerByPTS: 1,
      condition: "Не требует ремонта",
      vinNumber: "WBAC64564ASDAWGRTDR3E2",
      ownerName: "АвтоЭксперт Премиум",
      ownerPhone: "+998 55 520 44 44",
      ownerAddress: " Узбекистан, г. Ташкент, Сергели-5, ТКАД, 62",
      description: {
        title: "Описание",
        body: " Куплена новой у официального дилера в РФ в конце декабря 2020 года. " +
          "По причине отъезда владельца заграницу сразу после покупки, с тех пор стояла в теплом, " +
          "сухом и охраняемом паркинге, лишь изредка использовалась и обслуживалась у ОД родственниками пенсионного возраста. " +
          "Ни разу не использовали Launch Control, никакого тюнинга, эксплуатация только в пределах скоростного лимита. " +
          "В салоне поставили оригинальную ковку M Performance (самые легкие диски для данного кузова) на шинах Michelin Pilot Sport 4S," +
          "так же есть зимняя липучка Continental Winter Contact TS860S SSR для этих же дисков.  Богатая комплектация: " +
          "Адаптивный круиз-контроль, люк, пакет M Technology, проекция, двойное остекление (в салоне тише, " +
          "чем во многих премиальных внедорожниках), лазерные фары, покрашенные."
      },
    }
  },
  {
    id: "44",
    carName: "BYD Song Plus Champion Edition",
    carPrice: "3809873",
    images: [
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fs_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_pr_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rst_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fql_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_eb1_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ca_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ds_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_shf_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rps_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_wc_izmo_1_1600x1067.avif",
    ],
    cardCardDetails: {
      statusCar: "В наличии",
      productionYear: "2020",
      mileage: "98 639 км",
      engine: "дизель, 3.0 л",
      kpp: "Автомат",
      privod: "полный",
      generation: "1 поколение",
      kits: "xDrive30d AT M Sport Plus",
      steeringWheel: "левый",
      body: "Внедорожник 5-дверный",
      color: "Черный",
      pts: "Оригинал",
      ownerByPTS: 1,
      condition: "Не требует ремонта",
      vinNumber: "WBAC64564ASDAWGRTDR3E2",
      ownerName: "АвтоЭксперт Премиум",
      ownerPhone: "+998 55 520 44 44",
      ownerAddress: " Узбекистан, г. Ташкент, Сергели-5, ТКАД, 62",
      description: {
        title: "Описание",
        body: " Куплена новой у официального дилера в РФ в конце декабря 2020 года. " +
          "По причине отъезда владельца заграницу сразу после покупки, с тех пор стояла в теплом, " +
          "сухом и охраняемом паркинге, лишь изредка использовалась и обслуживалась у ОД родственниками пенсионного возраста. " +
          "Ни разу не использовали Launch Control, никакого тюнинга, эксплуатация только в пределах скоростного лимита. " +
          "В салоне поставили оригинальную ковку M Performance (самые легкие диски для данного кузова) на шинах Michelin Pilot Sport 4S," +
          "так же есть зимняя липучка Continental Winter Contact TS860S SSR для этих же дисков.  Богатая комплектация: " +
          "Адаптивный круиз-контроль, люк, пакет M Technology, проекция, двойное остекление (в салоне тише, " +
          "чем во многих премиальных внедорожниках), лазерные фары, покрашенные."
      },
    }
  },
  {
    id: "45",
    carName: "BYD Song Plus Champion Edition",
    carPrice: "380987300",
    images: [
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fs_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_pr_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rqn_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rst_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_fql_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_eb1_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ca_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_ds_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_shf_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_rps_izmo_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_sh_izmo_2_1600x1067.avif",
      "./assets/images/audi-a6/2022_audi_a6_sedan_prestige_i_oem_1_1600x1067.avif",
      "./assets/images/audi-a6/2024_audi_a6_sedan_premium-plus_wc_izmo_1_1600x1067.avif",
    ],
    cardCardDetails: {
      statusCar: "В наличии",
      productionYear: "2020",
      mileage: "98 639 км",
      engine: "дизель, 3.0 л",
      kpp: "Автомат",
      privod: "полный",
      generation: "1 поколение",
      kits: "xDrive30d AT M Sport Plus",
      steeringWheel: "левый",
      body: "Внедорожник 5-дверный",
      color: "Черный",
      pts: "Оригинал",
      ownerByPTS: 1,
      condition: "Не требует ремонта",
      vinNumber: "WBAC64564ASDAWGRTDR3E2",
      ownerName: "АвтоЭксперт Премиум",
      ownerPhone: "+998 55 520 44 44",
      ownerAddress: " Узбекистан, г. Ташкент, Сергели-5, ТКАД, 62",
      description: {
        title: "Описание",
        body: " Куплена новой у официального дилера в РФ в конце декабря 2020 года. " +
          "По причине отъезда владельца заграницу сразу после покупки, с тех пор стояла в теплом, " +
          "сухом и охраняемом паркинге, лишь изредка использовалась и обслуживалась у ОД родственниками пенсионного возраста. " +
          "Ни разу не использовали Launch Control, никакого тюнинга, эксплуатация только в пределах скоростного лимита. " +
          "В салоне поставили оригинальную ковку M Performance (самые легкие диски для данного кузова) на шинах Michelin Pilot Sport 4S," +
          "так же есть зимняя липучка Continental Winter Contact TS860S SSR для этих же дисков.  Богатая комплектация: " +
          "Адаптивный круиз-контроль, люк, пакет M Technology, проекция, двойное остекление (в салоне тише, " +
          "чем во многих премиальных внедорожниках), лазерные фары, покрашенные."
      },
    }
  },
]
