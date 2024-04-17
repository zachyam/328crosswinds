import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Grid } from '@mui/material';
import PageContainer from '../../components/container/PageContainer';
import Breadcrumb from '../../layouts/full/shared/breadcrumb/Breadcrumb';
import ParentCard from '../../components/shared/ParentCard';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Doughtnut Chart',
  },
];

const DoughnutChart = () => {

  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primarylight = theme.palette.primary.light;
  const secondary = theme.palette.secondary.main;
  const secondarylight = theme.palette.secondary.light;
  const warning = theme.palette.warning.main;

  // 1
  const optionsdoughnutchart = {
    chart: {
      id: 'donut-chart',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      foreColor: '#adb0bb',
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: '70px',
        },
      },
    },
    legend: {
      show: true,
      position: 'bottom',
      width: '50px',
    },
    colors: [primary, primarylight, secondary, secondarylight, warning],
    tooltip: {
      theme: 'dark',
      fillSeriesColor: false,
    },
  };
  const seriesdoughnutchart = [45, 15, 27, 18, 35];

  // 2
  const optionspiechart = {
    chart: {
      id: 'pie-chart',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: '70px',
        },
      },
    },
    legend: {
      show: true,
      position: 'bottom',
      width: '50px',
    },
    colors: [primary, primarylight, secondary, secondarylight, warning],
    tooltip: {
      fillSeriesColor: false,
    },
  };
  const seriespiechart = [45, 15, 27, 18, 35];

  return (
    <PageContainer title="Doughnut & Pie Chart" description="this is innerpage">
      {/* breadcrumb */}
      <Breadcrumb title="Doughtnut Chart" items={BCrumb} />
      {/* end breadcrumb */}
      <Grid container spacing={3}>
        <Grid item lg={6} md={12} xs={12}>
          <ParentCard title="Doughnut Charts">
            <Chart
              options={optionsdoughnutchart}
              series={seriesdoughnutchart}
              type="donut"
              height="300px"
            />
          </ParentCard>
        </Grid>
        <Grid item lg={6} md={12} xs={12}>
          <ParentCard title='Pie Charts'>
            <Chart options={optionspiechart} series={seriespiechart} type="pie" height="300px" />
          </ParentCard>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default DoughnutChart;
