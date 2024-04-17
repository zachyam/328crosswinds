import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  CardContent,
  Typography,
  Avatar,
  Grid,
  CardMedia,
  Stack,
  Tooltip,
  Chip,
  Box,
  Skeleton,
} from '@mui/material';
import { IconMessage2, IconEye, IconPoint } from '@tabler/icons';
import user1 from 'src/assets/images/profile/user-1.jpg';
import user2 from 'src/assets/images/profile/user-2.jpg';
import user3 from 'src/assets/images/profile/user-3.jpg';
import img1 from 'src/assets/images/blog/blog-img1.jpg';
import img2 from 'src/assets/images/blog/blog-img2.jpg';
import img3 from 'src/assets/images/blog/blog-img3.jpg';

import BlankCard from '../../shared/BlankCard';

const complexCard = [
  {
    avatar: user1,
    coveravatar: img1,
    title: 'As yen tumbles, gadget-loving Japan goes for secondhand iPhones',
    category: 'Social',
    name: 'Georgeanna Ramero',
    view: '9,125',
    comments: '3',
    time: 'Mon, Dec 19',
  },
  {
    avatar: user2,
    coveravatar: img2,
    title: 'Intel loses bid to revive antitrust case against patent foe Fortress',
    category: 'Gadget',
    name: 'Georgeanna Ramero',
    view: '4,150',
    comments: '38',
    time: 'Sun, Dec 18',
  },
  {
    avatar: user3,
    coveravatar: img3,
    title: 'COVID outbreak deepens as more lockdowns loom in China',
    category: 'Health',
    name: 'Georgeanna Ramero',
    view: '9,480',
    comments: '12',
    time: 'Sat, Dec 17',
  },
];

const ComplexCard = () => {
  const [isLoading, setLoading] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Grid container spacing={3}>
      {complexCard.map((author, index) => (
        <Grid item xs={12} sm={4} key={index}>
          <BlankCard className="hoverCard">
            <>
              <Typography component={Link} to="/">
                {isLoading ? (
                  <Skeleton variant="square" animation="wave" width="100%" height={240}></Skeleton>
                ) : (
                  <CardMedia
                    component="img"
                    height="240"
                    image={author.coveravatar}
                    alt="green iguana"
                  />
                )}
              </Typography>
              <CardContent>
                <Stack direction="row" sx={{ marginTop: '-45px' }}>
                  <Tooltip title={author.name} placement="top">
                    <Avatar aria-label="recipe" src={author.avatar}></Avatar>
                  </Tooltip>
                  <Chip
                    sx={{ marginLeft: 'auto', marginTop: '-21px', backgroundColor: 'white' }}
                    label="2 min Read"
                    size="small"
                  ></Chip>
                </Stack>
                <Chip label={author.category} size="small" sx={{ marginTop: 2 }}></Chip>
                <Box my={3}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    color="inherit"
                    sx={{ textDecoration: 'none' }}
                    component={Link}
                    to="/"
                  >
                    {author.title}
                  </Typography>
                </Box>
                <Stack direction="row" gap={3} alignItems="center">
                  <Stack direction="row" gap={1} alignItems="center">
                    <IconEye size="18" /> {author.view}
                  </Stack>
                  <Stack direction="row" gap={1} alignItems="center">
                    <IconMessage2 size="18" /> {author.comments}
                  </Stack>

                  <Stack direction="row" ml="auto" alignItems="center">
                    <IconPoint size="16" />
                    <small>{author.time}</small>
                  </Stack>
                </Stack>
              </CardContent>
            </>
          </BlankCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default ComplexCard;
