// pages/api/export-to-csv.js
import { Parser } from 'json2csv';
import { getTourByCodename } from '../../lib/services/kontentClient';
import { defaultEnvId, defaultPreviewKey } from '../../lib/utils/env';
import { Tour } from '../../models';

export default async function handler(req, res) {
  // Function to fetch content items and linked items from your CMS
  const tourCodename = req.query.codename;
  if (typeof tourCodename !== "string") {
    return res.status(400).json({ error: "You have to provide 'codename' query parameter with the tour's codename." });
  }
  const currentEnvId = defaultEnvId;
  const currentPreviewApiKey = defaultPreviewKey;
  // This should return an array of content items with linked items
  // For example:
  const tour = await getTourByCodename({ envId: currentEnvId, previewApiKey: currentPreviewApiKey }, tourCodename, true);
  const contentItems = await fetchContentItems(tour);

  // Define the fields for the CSV file
  const fields = [
    {
      label: 'Tour Name',
      value: 'tourName'
    },
    {
      label: 'Description',
      value: 'description'
    },
    {
      label: 'Reader offer intro 2',
      value: 'readerOfferIntro2'
    },
    {
      label: 'Reader offer intro 3',
      value: 'readerOfferIntro3'
    },
    {
      label: 'Includes',
      value: 'includes'
    },
    {
      label: 'Images',
      value: 'images'
    },
    {
      label: 'Days',
      value: 'duration'
    },
    {
      label: 'Hotels',
      value: (row) => row.hotels.map((item) => item.hotelName).join(';')
    }
  ];

  try {
    // Create a new parser instance with the fields
    const parser = new Parser({ fields });
    // Convert data to CSV
    const csv = parser.parse(contentItems);

    // Set the headers to prompt download
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', `attachment; filename=${tour.elements.name.value}.csv`);

    // Send the CSV file
    res.status(200).send(csv);
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'Failed to generate CSV file' });
  }
}

// Mock function to simulate fetching content items from a CMS
// Replace this with your actual data fetching logic
async function fetchContentItems(tour: Tour) {  
  return [
    {
      tourName: tour.elements.tourTitle.value,
      description: tour.elements.tourIntro.value,
      readerOfferIntro2: tour.elements.readerOfferIntro2.value,
      readerOfferIntro3: tour.elements.readerOfferIntro3.value,
      includes: tour.elements.untitledRichText.value,
      duration: tour.elements.tourDurationInDays.value,
      images: tour.elements.images.value.map((image) => image.url).join(';'),      
      hotels: tour.elements.hotelS.linkedItems.map((hotel) => ({
        hotelName: hotel.elements.name.value,
        hoteldescription: hotel.elements.description.value,
        hotelRating: hotel.elements.rating.value
      }))
    },
    // ... more content items
  ];
}