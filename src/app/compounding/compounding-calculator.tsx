'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

interface CompoundingData {
  month: number;
  value: number;
  growth: number;
  totalContributions: number;
}

type Currency = 'USD' | 'INR';
type Frequency = 'one-time' | 'monthly' | 'quarterly' | 'yearly';

const USD_TO_INR_RATE = 90;

const monthlyRateOptions = [
  { label: '1%', value: 0.01 },
  { label: '2%', value: 0.02 },
  { label: '3%', value: 0.03 },
  { label: '4%', value: 0.04 },
];

const yearOptions = [3, 5, 7, 10, 20];

export function CompoundingCalculator() {
  const [initialInvestment, setInitialInvestment] = useState<number>(10000);
  const [recurringInvestment, setRecurringInvestment] = useState<number>(500);
  const [investmentFrequency, setInvestmentFrequency] = useState<Frequency>('monthly');
  const [monthlyRate, setMonthlyRate] = useState<number>(0.02);
  const [years, setYears] = useState<number>(5);
  const [currency, setCurrency] = useState<Currency>('USD');

  const currencySymbol = currency === 'USD' ? '$' : '₹';

  const compoundingData = useMemo((): CompoundingData[] => {
    const data: CompoundingData[] = [];
    let currentValue = initialInvestment;
    let totalContributions = initialInvestment;
    const months = years * 12;

    for (let i = 1; i <= months; i++) {
      if (investmentFrequency !== 'one-time') {
          if (investmentFrequency === 'monthly') {
            currentValue += recurringInvestment;
            totalContributions += recurringInvestment;
          } else if (investmentFrequency === 'quarterly' && i % 3 === 0) {
            currentValue += recurringInvestment;
            totalContributions += recurringInvestment;
          } else if (investmentFrequency === 'yearly' && i % 12 === 0) {
            currentValue += recurringInvestment;
            totalContributions += recurringInvestment;
          }
      }
      
      const growth = currentValue * monthlyRate;
      currentValue += growth;

      data.push({
        month: i,
        value: parseFloat(currentValue.toFixed(2)),
        growth: parseFloat(growth.toFixed(2)),
        totalContributions: parseFloat(totalContributions.toFixed(2)),
      });
    }
    return data;
  }, [initialInvestment, monthlyRate, years, recurringInvestment, investmentFrequency]);

  const displayData = useMemo(() => {
    if (currency === 'INR') {
      return compoundingData.map(d => ({
        ...d,
        value: parseFloat((d.value * USD_TO_INR_RATE).toFixed(2)),
        growth: parseFloat((d.growth * USD_TO_INR_RATE).toFixed(2)),
      }));
    }
    return compoundingData;
  }, [compoundingData, currency]);
  
  const displayInitialInvestment = currency === 'INR' ? initialInvestment * USD_TO_INR_RATE : initialInvestment;
  const displayRecurringInvestment = currency === 'INR' ? recurringInvestment * USD_TO_INR_RATE : recurringInvestment;

  const chartConfig = {
    value: {
      label: "Portfolio Value",
      color: "hsl(var(--primary))",
    },
  }
  
  const formatCurrency = (value: number) => {
    return `${currencySymbol}${value.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`
  }
  
  const formatYAxis = (value: number) => {
    if (value >= 1000000) {
      return `${currencySymbol}${(value / 1000000).toFixed(1)}M`;
    }
    if (value >= 1000) {
      return `${currencySymbol}${(value / 1000)}k`;
    }
    return `${currencySymbol}${value}`;
  }

  const finalValue = displayData.length > 0 ? displayData[displayData.length - 1].value : displayInitialInvestment;
  const totalContributions = (investmentFrequency === 'one-time' ? initialInvestment : compoundingData[compoundingData.length -1].totalContributions) * (currency === 'INR' ? USD_TO_INR_RATE : 1);
  const totalGrowth = finalValue - totalContributions;

  return (
    <div className="space-y-8">
      <Card className="bg-card/50">
        <CardHeader>
          <CardTitle className="font-headline text-xl">Compounding Parameters</CardTitle>
          <CardDescription>
            Adjust the parameters below to see the power of compounding.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Label htmlFor="initial-investment">Initial Investment ({currency})</Label>
            <Input
              id="initial-investment"
              type="number"
              value={initialInvestment}
              onChange={(e) => setInitialInvestment(Number(e.target.value))}
              placeholder="e.g., 10000"
            />
             <p className="text-sm text-muted-foreground">
                Currently showing: {formatCurrency(displayInitialInvestment)}
            </p>
          </div>
          <div className="space-y-2">
            <Label>Recurring Investment ({currency})</Label>
             <Input
              id="recurring-investment"
              type="number"
              value={recurringInvestment}
              onChange={(e) => setRecurringInvestment(Number(e.target.value))}
              placeholder="e.g., 500"
              disabled={investmentFrequency === 'one-time'}
            />
            <p className="text-sm text-muted-foreground">
                Currently showing: {formatCurrency(displayRecurringInvestment)}
            </p>
          </div>
          <div className="space-y-2">
            <Label>Investment Frequency</Label>
            <RadioGroup
              value={investmentFrequency}
              onValueChange={(value: Frequency) => setInvestmentFrequency(value)}
              className="flex items-center space-x-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="monthly" id="monthly" />
                <Label htmlFor="monthly" className="font-normal">Monthly</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="quarterly" id="quarterly" />
                <Label htmlFor="quarterly" className="font-normal">Quarterly</Label>
              </div>
               <div className="flex items-center space-x-2">
                <RadioGroupItem value="yearly" id="yearly" />
                <Label htmlFor="yearly" className="font-normal">Yearly</Label>
              </div>
               <div className="flex items-center space-x-2">
                <RadioGroupItem value="one-time" id="one-time" />
                <Label htmlFor="one-time" className="font-normal">One-Time</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="space-y-2">
            <Label>Currency</Label>
            <RadioGroup
              value={currency}
              onValueChange={(value: Currency) => setCurrency(value)}
              className="flex items-center space-x-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="USD" id="usd" />
                <Label htmlFor="usd" className="font-normal">USD ($)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="INR" id="inr" />
                <Label htmlFor="inr" className="font-normal">INR (₹)</Label>
              </div>
            </RadioGroup>
            <p className="text-sm text-muted-foreground">
                1 USD = {USD_TO_INR_RATE} INR
            </p>
          </div>
           <div className="space-y-2">
            <Label>Monthly Return Rate</Label>
            <RadioGroup
              value={String(monthlyRate)}
              onValueChange={(value) => setMonthlyRate(Number(value))}
              className="flex flex-wrap items-center gap-x-4 gap-y-2"
            >
              {monthlyRateOptions.map(option => (
                <div key={option.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={String(option.value)} id={`rate-${option.value}`} />
                  <Label htmlFor={`rate-${option.value}`} className="font-normal">{option.label}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
           <div className="space-y-2">
            <Label>Compounding Years</Label>
            <RadioGroup
              value={String(years)}
              onValueChange={(value) => setYears(Number(value))}
              className="flex flex-wrap items-center gap-x-4 gap-y-2"
            >
              {yearOptions.map(option => (
                <div key={option} className="flex items-center space-x-2">
                  <RadioGroupItem value={String(option)} id={`years-${option}`} />
                  <Label htmlFor={`years-${option}`} className="font-normal">{option} Years</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </CardContent>
      </Card>
      
       <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Projected Growth</CardTitle>
          <CardDescription>
            Summary of your investment growth over {years} years.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-sm text-muted-foreground">Final Value</p>
            <p className="text-2xl font-bold">{formatCurrency(finalValue)}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Total Contributions</p>
            <p className="text-2xl font-bold">{formatCurrency(totalContributions)}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Total Growth</p>
            <p className="text-2xl font-bold text-green-500">{formatCurrency(totalGrowth)}</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card/50">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Growth Over Time</CardTitle>
           <CardDescription>
            The chart below illustrates the exponential growth of your investment over {years} years at {monthlyRate * 100}% per month.
          </CardDescription>
        </CardHeader>
        <CardContent>
           <ChartContainer config={chartConfig} className="w-full h-[400px]">
            <AreaChart
              data={displayData}
              margin={{
                top: 5,
                right: 20,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border) / 0.5)" />
              <XAxis 
                dataKey="month" 
                tickFormatter={(value) => `M${value}`}
                stroke="hsl(var(--muted-foreground))"
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                tickLine={false}
                axisLine={false}
                tickFormatter={formatYAxis}
               />
              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent 
                    labelFormatter={(label) => `Month ${label}`}
                    formatter={(value, name) => {
                      if (name === 'value') {
                        return formatCurrency(value as number);
                      }
                      return value;
                    }}
                    indicator="dot" 
                  />
                }
              />
              <defs>
                  <linearGradient id="fillValue" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--color-value)"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--color-value)"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                </defs>
              <Area type="monotone" dataKey="value" name="Portfolio Value" stroke="var(--color-value)" strokeWidth={2} fill="url(#fillValue)" />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card className="bg-card/50">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Yearly Breakdown</CardTitle>
          <CardDescription>
            A year-by-year look at the growth of your principal investment.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Year</TableHead>
                <TableHead>Starting Value</TableHead>
                <TableHead>Ending Value</TableHead>
                <TableHead className="text-right">Yearly Gain</TableHead>
                <TableHead className="text-right">Total Return</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: years }, (_, i) => {
                const year = i + 1;
                const startOfMonth = (year - 1) * 12;
                const endOfMonth = year * 12 - 1;
                
                const baseStartingValue = startOfMonth === 0 ? initialInvestment : compoundingData[startOfMonth - 1].value;
                const baseEndingValue = compoundingData[endOfMonth].value;

                const startingValue = currency === 'INR' ? baseStartingValue * USD_TO_INR_RATE : baseStartingValue;
                const endingValue = currency === 'INR' ? baseEndingValue * USD_TO_INR_RATE : baseEndingValue;
                
                const yearlyGain = endingValue - startingValue;
                const totalReturn = (baseEndingValue / compoundingData[endOfMonth].totalContributions - 1) * 100;
                
                return (
                  <TableRow key={year}>
                    <TableCell className="font-medium">{year}</TableCell>
                    <TableCell>{formatCurrency(startingValue)}</TableCell>
                    <TableCell>{formatCurrency(endingValue)}</TableCell>
                    <TableCell className="text-right text-green-400">+{formatCurrency(yearlyGain)}</TableCell>
                    <TableCell className="text-right">{!isNaN(totalReturn) ? `${totalReturn.toFixed(2)}%` : 'N/A'}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

    