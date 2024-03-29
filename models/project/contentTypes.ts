/**
 * Generated by '@kontent-ai/model-generator@6.5.1'
 */
export const contentTypes = {
    /**
     * Excursion
     */
    excursion: {
        codename: 'excursion',
        id: '08958491-9d29-4b76-bf62-b6b7d27c99b4',
        externalId: undefined,
        name: 'Excursion',
        elements: {
            /**
             * Description (rich_text)
             */
            description: {
                codename: 'description',
                id: '03a718d8-074c-47a2-b300-ae1c73c86c21',
                externalId: undefined,
                name: 'Description',
                required: false,
                type: 'rich_text'
            },

            /**
             * Destination (rich_text)
             */
            destination: {
                codename: 'destination',
                id: '9bb18daf-9163-42e8-bcad-1470de98b98a',
                externalId: undefined,
                name: 'Destination',
                required: false,
                type: 'rich_text'
            },

            /**
             * Duration  Half Day Full Day  (text)
             */
            duration__half_day_full_day_: {
                codename: 'duration__half_day_full_day_',
                id: 'ccbb2b3d-9b6a-4cc7-8a9d-77f85cef3400',
                externalId: undefined,
                name: 'Duration (Half Day/Full Day)',
                required: false,
                type: 'text'
            },

            /**
             * Price in   pp (number)
             */
            price_in___pp: {
                codename: 'price_in___pp',
                id: '3d5844b1-ecba-43d4-9408-ca8e5d711949',
                externalId: undefined,
                name: 'Price in £ pp',
                required: false,
                type: 'number'
            }
        }
    },

    /**
     * Export Module
     */
    export_module: {
        codename: 'export_module',
        id: '446719ae-3c3b-48b0-b824-000594043d43',
        externalId: undefined,
        name: 'Export Module',
        elements: {
            /**
             * Export to CSV (custom)
             */
            export_to_csv: {
                codename: 'export_to_csv',
                id: '0634cc12-0ef4-4b03-874c-f267aec175ac',
                externalId: undefined,
                name: 'Export to CSV',
                required: false,
                type: 'custom'
            },

            /**
             * Tours to export (modular_content)
             */
            tours_to_export: {
                codename: 'tours_to_export',
                id: 'bcfc6a84-beab-471a-8e03-c9e4e5d924ff',
                externalId: undefined,
                name: 'Tours to export',
                required: false,
                type: 'modular_content'
            }
        }
    },

    /**
     * Hotel
     */
    hotel: {
        codename: 'hotel',
        id: 'd01c04c4-cc44-49df-b0c1-2abf703b0360',
        externalId: undefined,
        name: 'Hotel',
        elements: {
            /**
             * Accessibility Information (text)
             */
            accessibility_information: {
                codename: 'accessibility_information',
                id: '9a90a892-7e67-40c4-bfc6-cd6ac4d60b63',
                externalId: undefined,
                name: 'Accessibility Information',
                required: false,
                type: 'text'
            },

            /**
             * Description (rich_text)
             */
            description: {
                codename: 'description',
                id: 'ada93ab5-a20f-43af-9e29-5d7bfac08d15',
                externalId: undefined,
                name: 'Description',
                required: false,
                type: 'rich_text'
            },

            /**
             * Name (rich_text)
             */
            name: {
                codename: 'name',
                id: 'e1b01826-4674-4d67-a058-a522edc97a28',
                externalId: undefined,
                name: 'Name',
                required: false,
                type: 'rich_text'
            },

            /**
             * Rating (text)
             */
            rating: {
                codename: 'rating',
                id: '6d703ef0-308e-4356-b406-8ad46d39333d',
                externalId: undefined,
                name: 'Rating',
                required: false,
                type: 'text'
            }
        }
    },

    /**
     * Page
     */
    page: {
        codename: 'page',
        id: '3ca89ab9-e78b-4932-9d6b-a87ea3197d62',
        externalId: undefined,
        name: 'Page',
        elements: {
            /**
             * Content (modular_content)
             */
            content: {
                codename: 'content',
                id: 'a3e9800d-4e6c-4e34-8e62-019d775eb076',
                externalId: undefined,
                name: 'Content',
                required: false,
                type: 'modular_content'
            },

            /**
             * Show in navigation (multiple_choice)
             */
            show_in_navigation: {
                codename: 'show_in_navigation',
                id: 'a81d8dae-b77f-41a6-be9a-61b244e4d25d',
                externalId: undefined,
                name: 'Show in navigation',
                required: false,
                type: 'multiple_choice',
                options: {
                    yes: {
                        name: 'Yes',
                        id: '64b038b2-f874-4444-8e1e-382295483c0b',
                        codename: 'yes',
                        externalId: undefined
                    },
                    no: {
                        name: 'No',
                        id: '41aa3641-d7ea-4957-90c3-5e8a1a71c922',
                        codename: 'no',
                        externalId: undefined
                    }
                }
            },

            /**
             * Subpages (subpages)
             */
            subpages: {
                codename: 'subpages',
                id: '1e36b1f4-0d45-47d5-b290-b4c2f17340e7',
                externalId: undefined,
                name: 'Subpages',
                required: false,
                type: 'subpages'
            },

            /**
             * Title (text)
             */
            title: {
                codename: 'title',
                id: '7c51f09f-2ddc-47cb-ad4f-c91a2effd38a',
                externalId: undefined,
                name: 'Title',
                required: false,
                type: 'text'
            },

            /**
             * URL (url_slug)
             */
            url: {
                codename: 'url',
                id: 'c8757f25-632f-4432-b37b-1155f968889d',
                externalId: undefined,
                name: 'URL',
                required: false,
                type: 'url_slug'
            }
        }
    },

    /**
     * Tour
     */
    tour: {
        codename: 'tour',
        id: '6a42abf2-4651-4cbb-bf59-e0995d442de8',
        externalId: undefined,
        name: 'Tour',
        elements: {
            /**
             * Export Tour (custom)
             */
            export_tour: {
                codename: 'export_tour',
                id: '187c79ff-8347-4ce8-950a-ca3b5facb689',
                externalId: undefined,
                name: 'Export Tour',
                required: false,
                type: 'custom'
            },

            /**
             * Hotel s  (modular_content)
             */
            hotel_s_: {
                codename: 'hotel_s_',
                id: '3d8c6dac-c711-40ef-82ff-33fe75dbb29e',
                externalId: undefined,
                name: 'Hotel(s)',
                required: false,
                type: 'modular_content'
            },

            /**
             * Images (asset)
             */
            images: {
                codename: 'images',
                id: '37720700-dc2e-4070-a64d-d15b2c296f12',
                externalId: undefined,
                name: 'Images',
                required: false,
                type: 'asset'
            },

            /**
             * Included Excursions (modular_content)
             */
            included_excursions: {
                codename: 'included_excursions',
                id: '787ed248-53e8-4d0f-9f2d-1d02cfd7cd10',
                externalId: undefined,
                name: 'Included Excursions',
                required: false,
                type: 'modular_content'
            },

            /**
             * Optional Excursion s  (modular_content)
             */
            optional_excursion_s_: {
                codename: 'optional_excursion_s_',
                id: 'a21d8782-931a-4305-a104-f4a9a9d6c5a5',
                externalId: undefined,
                name: 'Optional Excursion(s)',
                required: false,
                type: 'modular_content'
            },

            /**
             * Reader offer intro 2 (rich_text)
             */
            reader_offer_intro_2: {
                codename: 'reader_offer_intro_2',
                id: '848905b4-2630-41d3-9a76-d13de12e3520',
                externalId: undefined,
                name: 'Reader offer intro 2',
                required: true,
                type: 'rich_text'
            },

            /**
             * Reader offer intro 3 (rich_text)
             */
            reader_offer_intro_3: {
                codename: 'reader_offer_intro_3',
                id: 'd9d28a30-2607-46fa-aaad-ab30cf09e667',
                externalId: undefined,
                name: 'Reader offer intro 3',
                required: true,
                type: 'rich_text'
            },

            /**
             * Tour duration in days (number)
             */
            tour_duration_in_days: {
                codename: 'tour_duration_in_days',
                id: '75d9d13f-0103-46ac-b644-bb044bcc57f6',
                externalId: undefined,
                name: 'Tour duration in days',
                required: false,
                type: 'number'
            },

            /**
             * Tour Intro (rich_text)
             */
            tour_intro: {
                codename: 'tour_intro',
                id: '6623fbb4-aec7-4cd6-88a6-bcbee95b151e',
                externalId: undefined,
                name: 'Tour Intro',
                required: true,
                type: 'rich_text'
            },

            /**
             * Tour Title (text)
             */
            tour_title: {
                codename: 'tour_title',
                id: '876d8a43-5c12-4c3a-a09d-79b0487862ee',
                externalId: undefined,
                name: 'Tour Title',
                required: true,
                type: 'text'
            },

            /**
             * What s Included (rich_text)
             */
            untitled_rich_text: {
                codename: 'untitled_rich_text',
                id: 'a1a40563-6186-4f52-834b-e09a0344ef51',
                externalId: undefined,
                name: "What's Included",
                required: true,
                type: 'rich_text'
            }
        }
    },

    /**
     * Web spotlight root
     */
    web_spotlight_root: {
        codename: 'web_spotlight_root',
        id: 'e9a559db-bf98-479a-8472-b720c178fbaf',
        externalId: undefined,
        name: 'Web spotlight root',
        elements: {
            /**
             * Content (modular_content)
             */
            content: {
                codename: 'content',
                id: '54ba35ec-9f44-45c4-a8f5-fdf9a3944c26',
                externalId: undefined,
                name: 'Content',
                required: false,
                type: 'modular_content'
            },

            /**
             * Subpages (subpages)
             */
            subpages: {
                codename: 'subpages',
                id: 'd6939665-1984-44f1-88ae-c45489114190',
                externalId: undefined,
                name: 'Subpages',
                required: false,
                type: 'subpages'
            },

            /**
             * Title (text)
             */
            title: {
                codename: 'title',
                id: 'f38fcf08-05b0-42fc-af1b-791103d5155c',
                externalId: undefined,
                name: 'Title',
                required: false,
                type: 'text'
            }
        }
    }
} as const;
