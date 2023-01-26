import { Box, Typography } from "@mui/material";
import { GetStaticPaths, GetStaticProps } from "next";
import { fetchOne, fetchAllDentistIds } from "../../src/api/api";
import { Dentist } from "../../src/models/Dentist";
import Image from "next/image";
import Layout from "../../src/components/Layout";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useRef, useState } from "react";
import interactionPlugin from "@fullcalendar/interaction";
import CreateBooking from "../../src/components/CreateBooking";

export default function BookDentist({ dentist }: { dentist: Dentist }) {
  const calendarRef = useRef();

  const [openBookingModal, setOpenBookingModal] = useState(false);
  const [bookingDate, setBookingDate] = useState("");
  const [events, setEvents] = useState<any>([
    { title: "Meeting with Abu", date: "2023-01-26" },
    { title: "Meeting with Jhn", date: "2023-01-27" },
  ]);

  const handleFormSubmit = (values) => {

  };

  const handleDateSelect = (selectInfo: any) => {
    setOpenBookingModal(true);

    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection
    const title = "Booking with ";
    const newEvents = [
      ...events,
      {
        id: 1,
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      },
    ];
    setEvents(newEvents);
  };

  return (
    <>
      <Layout>
        <Box sx={{ display: "flex", gap: "20px" }}>
          <Box sx={{ width: "200px", height: "200px", position: "relative" }}>
            <Image
              src={dentist.img}
              alt={dentist.name}
              layout="fill"
              objectFit="contain"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="h5">{dentist.name}</Typography>
            <Typography variant="subtitle2" component="p">
              {dentist.about}
            </Typography>
          </Box>
        </Box>
        <Box my={2}>
          <Typography variant="h4">Bookings</Typography>
        </Box>
        <Box my={2}>
          <FullCalendar
            headerToolbar={{
              start: "today prev next",
              end: "dayGridMonth timeGridDay",
            }}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            editable
            selectable
            events={events}
            select={handleDateSelect}
          />
        </Box>
      </Layout>
      <CreateBooking
        dentist={dentist}
        bookingDate={bookingDate}
        open={openBookingModal}
        handleClose={() => setOpenBookingModal(false)}
      />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await fetchAllDentistIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const dentist = await fetchOne(params?.id as string);
  return {
    props: {
      dentist,
    },
  };
};
