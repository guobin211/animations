/**
 * 2-BaseCanvas.stories.ts
 * @author GuoBin 2020-07-01
 */
import { TitleComponent } from "../components/title/title.component";

export default {
  title: "Title",
  component: TitleComponent
};

export const H1 = () => ({component: TitleComponent, props: {data: "H1", level: 1}});
export const H2 = () => ({component: TitleComponent, props: {data: "H2", level: 2}});
export const H3 = () => ({component: TitleComponent, props: {data: "H3", level: 3}});
export const H4 = () => ({component: TitleComponent, props: {data: "H4", level: 4}});
export const H5 = () => ({component: TitleComponent, props: {data: "H5", level: 5}});
export const H6 = () => ({component: TitleComponent, props: {data: "H6", level: 6}});

H1.story = { name: "H1"};
H2.story = { name: "H2"};
H3.story = { name: "H3"};
H4.story = { name: "H4"};
H5.story = { name: "H5"};
H6.story = { name: "H6"};
