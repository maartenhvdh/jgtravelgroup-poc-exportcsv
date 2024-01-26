// pages/api/export-to-csv.js
import { Parser } from 'json2csv';
import { getTourExportByCodename } from '../../lib/services/kontentClient';
import { defaultEnvId, defaultPreviewKey } from '../../lib/utils/env';
import { ExportModule, Tour } from '../../models';
import { formatDate, formatMonthsForLocale } from '../../lib/utils/dateTime';

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
  const toursExport = await getTourExportByCodename({ envId: currentEnvId, previewApiKey: currentPreviewApiKey }, tourCodename, true) as ExportModule;

  const contentItems = []
  toursExport.elements.toursToBeExported.linkedItems.map((tour) => {
    contentItems.push(fetchContentItems(tour))
  }
  )

  // Define the fields for the CSV file
  const fields = [
    {
      label: 'Tour Number',
      value: 'tourNumber'
    },
    {
      label: 'Tour Name',
      value: 'tourName'
    },
    {
      label: 'Description',
      value: 'description'
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
      label: 'Months',
      value: 'months'
    },
    {
      label: 'Price',
      value: 'price'
    },
    {
      label: 'Hotel name',
      value: 'hotelname'
    },
    {
      label: 'Hotel description',
      value: 'hoteldescription'
    },
    {
      label: 'Hotel accessibility information',
      value: 'hotelaccessibility'
    },
    {
      label: 'Hotel rating',
      value: 'hotelrating'
    },    
    {
      label: 'Included excursion',
      value: 'includedexcursion'
    }, 
    {
      label: 'Included excursion description',
      value: 'includedexcursiondescription'
    },    
    {
      label: 'Optional excursion',
      value: 'optionalexcursion'
    }, 
    {
      label: 'Optional excursion description',
      value: 'optionalexcursiondescription'
    }, 
    {
      label: 'Optional excursion price',
      value: 'optionalexcursionprice'
    }
  ];

  try {
    // Create a new parser instance with the fields
    const parser = new Parser({ fields });
    // Convert data to CSV
    const csv = parser.parse(contentItems);

    // Set the headers to prompt download
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', `attachment; filename=${getCurrentDate()}-${tourCodename}.csv`);

    // Send the CSV file
    res.status(200).send(csv);
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'Failed to generate CSV file' });
  }
}

export function getCurrentDate(separator = '') {

  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date}`
}

// Mock function to simulate fetching content items from a CMS
// Replace this with your actual data fetching logic
function fetchContentItems(tour: Tour) {
  const startMonth = formatMonthsForLocale(tour.elements.startDate.value, tour.system.language, 'short')
  const endMonth = formatMonthsForLocale(tour.elements.endDate.value, tour.system.language, 'short')
  return {
    tourNumber: tour.elements.tourNumber.value,
    tourName: tour.elements.name.value,
    description: tour.elements.description.value,
    includes: tour.elements.includes.value,
    duration: tour.elements.durationInDays.value,
    months: `${startMonth} - ${endMonth}`,
    price: tour.elements.price.value,
    images: tour.elements.image.value.map((image) => image.url).join(';'),
    hotelname: tour.elements.hotel.linkedItems[0]?.elements.name.value,
    hoteldescription: tour.elements.hotel.linkedItems[0]?.elements.description.value,
    hotelaccessibility: tour.elements.hotel.linkedItems[0]?.elements.hotelAccessibilityInformation.value,
    hotelrating: tour.elements.hotel.linkedItems[0]?.elements.rating.value,
    includedexcursion: `${tour.elements.includedExcursions.linkedItems[0]?.elements.name.value} (${tour.elements.includedExcursions.linkedItems[0]?.elements.duration.value[0].name})`,
    includedexcursiondescription: tour.elements.includedExcursions.linkedItems[0]?.elements.description.value,
    optionalexcursion: `${tour.elements.optionalExcursions.linkedItems[0]?.elements.name.value} (${tour.elements.optionalExcursions.linkedItems[0]?.elements.duration.value[0].name})`,
    optionalexcursiondescription: tour.elements.optionalExcursions.linkedItems[0]?.elements.description.value,
    optionalexcursionprice: tour.elements.optionalExcursions.linkedItems[0]?.elements.priceInPoundPp.value
  }
}