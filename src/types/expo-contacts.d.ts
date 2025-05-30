declare module 'expo-contacts' {
    export interface Contact {
        id: string;
        name: string;
        phoneNumbers?: {
            id: string;
            number: string;
            label: string;
        }[];
        emails?: {
            id: string;
            email: string;
            label: string;
        }[];
    }

    export interface ContactsResponse {
        data: Contact[];
        hasNextPage: boolean;
        hasPreviousPage: boolean;
    }

    export const Fields: {
        Name: string;
        PhoneNumbers: string;
        Emails: string;
    };

    export function requestPermissionsAsync(): Promise<{ status: 'granted' | 'denied' }>;
    export function getContactsAsync(options?: {
        fields?: string[];
        pageSize?: number;
        pageOffset?: number;
    }): Promise<ContactsResponse>;
    export function getContactByIdAsync(id: string): Promise<Contact | null>;
    export function addContactAsync(contact: Partial<Contact>): Promise<Contact>;
    export function updateContactAsync(contact: Contact): Promise<Contact>;
    export function removeContactAsync(id: string): Promise<void>;
} 