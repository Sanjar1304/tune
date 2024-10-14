export interface INavbarMenu {
  label: string;
  path: string;
  id: string;
}

export const NAVBAR_MENUS: INavbarMenu[] = [
  {
    label:"headerMenu.menuTab.myAvto",
    path:"/my-avto",
    id: "0"
  },
  {
    label:"headerMenu.menuTab.catalog",
    path:"/catalog",
    id:"1"
  },
  {
    label:"headerMenu.menuTab.carCredit",
    path:"/avto-credit",
    id:"2"
  },
  {
    label:"headerMenu.menuTab.carInsurance",
    path:"/avto-insurance",
    id:"3"
  },
  {
    label:"headerMenu.menuTab.applyDocs",
    path:"/paperwork",
    id:"4"
  },
]
