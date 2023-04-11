import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: "o6gwmaqx",
    dataset: "production",

    title: "My Pesonal Website | Sanity test",
    apVersion: "2023-03-04",

    basePath: "/admin",

    plugins: [deskTool()],
    schema: { types: schemas },
});

export default config;
