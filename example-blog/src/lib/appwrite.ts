import { Client, Databases, Models } from 'node-appwrite';

export interface BlogPost extends Models.Document {
    title: string;
    date: string;
    description: string;
    content: string;
    slug: string;
}

export interface BlogPostList extends Models.DocumentList<BlogPost>{}

export const appwriteClient = new Client()
    .setEndpoint(import.meta.env.APPWRITE_ENDPOINT) // Your API Endpoint
    .setProject(import.meta.env.APPWRITE_PROJECT_ID) // Your project ID
    .setKey(import.meta.env.APPWRITE_APIKEY); // Your API Key

export const appwriteDatabases = new Databases(appwriteClient);