import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import shushuanItem from './schema/shushuanItem';

export default defineConfig({
    name: 'aeternum-studio',
    title: 'Aeternum | 蒐集庵 Studio',

    projectId: '8jci05f1',
    dataset: 'production',

    plugins: [deskTool()],

    schema: {
        types: [shushuanItem],
    },
});
