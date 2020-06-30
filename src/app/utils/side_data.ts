/**
 * side_data.ts
 * @author GuoBin 2020-06-30
 */
export interface SideData {
  name: string;
  path: string;
}
const side: SideData[] = [
  {name: "Canvas", path: "/canvas"},
  {name: "CanvasContext", path: "/canvas/context"},
  {name: "CanvasRenderer", path: "/canvas/renderer"},
  {name: "CanvasImage", path: "/canvas/image"},
  {name: "CanvasWebGL", path: "/canvas/webgl"}
];

export default side;
