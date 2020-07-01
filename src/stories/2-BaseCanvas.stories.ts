/**
 * 2-BaseCanvas.stories.ts
 * @author GuoBin 2020-07-01
 */
import { TitleComponent } from "../components/title/title.component";

export default {
  title: "BaseCanvas",
  component: TitleComponent,
};

export const ToStorybook = () => ({ component: TitleComponent, props: { data: "TitleComponent" } });

ToStorybook.story = { name: "to BaseCanvas" };
