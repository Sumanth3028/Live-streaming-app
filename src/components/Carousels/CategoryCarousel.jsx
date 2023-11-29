import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";

const data = [
  {
    src: "https://images.unsplash.com/photo-1502657877623-f66bf489d236",
    title: "Night view",
    description: "4.21M views",
  },
  {
    src: "https://images.unsplash.com/photo-1527549993586-dff825b37782",
    title: "Lake view",
    description: "4.74M views",
  },
  {
    src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
    title: "Mountain view",
    description: "3.98M views",
  },
  {
    src: "https://images.unsplash.com/photo-1502657877623-f66bf489d236",
    title: "Night view",
    description: "4.21M views",
  },
  {
    src: "https://images.unsplash.com/photo-1527549993586-dff825b37782",
    title: "Lake view",
    description: "4.74M views",
  },
  {
    src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
    title: "Mountain view",
    description: "3.98M views",
  },
  {
    src: "https://images.unsplash.com/photo-1502657877623-f66bf489d236",
    title: "Night view",
    description: "4.21M views",
  },
  {
    src: "https://images.unsplash.com/photo-1527549993586-dff825b37782",
    title: "Lake view",
    description: "4.74M views",
  },
  {
    src: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
    title: "Mountain view",
    description: "3.98M views",
  },
];

export default function CategoryCarousel() {
  return (
    <div className="ml-[100px] ">
      <p className="text-xl mb-5 text-white font-semibold">Streaming Now</p>
      <Box
        sx={{
          display: "flex",
          gap: 3,
          py: 1,
          overflow: "auto",
          width: 200,
          backgroundColor: "black",
          scrollSnapType: "x mandatory",
          "& > *": {
            scrollSnapAlign: "center",
          },
          "::-webkit-scrollbar": { display: "none" },
        }}
        className="px-[500px] py-[40px]   "
      >
        {data.map((item) => (
          <Card
            orientation="vertical"
            size="sm"
            key={item.title}
            variant="outlined"
          >
            <AspectRatio ratio="1" sx={{ minWidth: 60 }}>
              <img
                srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.src}?h=120&fit=crop&auto=format`}
                alt={item.title}
              />
            </AspectRatio>
            <Box sx={{ whiteSpace: "nowrap", mx: 1 }} className="w-[170px] ">
              <Typography level="title-md">{item.title}</Typography>
              <Typography level="body-sm">{item.description}</Typography>
            </Box>
          </Card>
        ))}
      </Box>
    </div>
  );
}
