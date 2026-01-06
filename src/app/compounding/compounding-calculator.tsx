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
}

type Currency = 'USD' | 'INR';

const USD_TO_INR_RATE = 83.5;

export function CompoundingCalculator() {
  const [initialInvestment, setInitialInvestment] = useState<number>(10000);
  const [monthlyRate] = useState<number>(0.02); // 2%
  const [years] = useState<number>(5);
  const [currency, setCurrency] = useState<Currency>('USD');

  const currencySymbol = currency === 'USD' ? '$' : '₹';

  const compoundingData = useMemo((): CompoundingData[] => {
    const data: CompoundingData[] = [];
    let currentValue = initialInvestment;
    const months = years * 12;

    for (let i = 1; i <= months; i++) {
      const growth = currentValue * monthlyRate;
      currentValue += growth;
      data.push({
        month: i,
        value: parseFloat(currentValue.toFixed(2)),
        growth: parseFloat(growth.toFixed(2)),
      });
    }
    return data;
  }, [initialInvestment, monthlyRate, years]);

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

  return (
    <div className="space-y-8">
      <Card className="bg-card/50">
        <CardHeader>
          <CardTitle className="font-headline text-xl">Compounding Parameters</CardTitle>
          <CardDescription>
            Adjust the initial investment to see the power of compounding over {years} years at a {monthlyRate * 100}% monthly return.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                Using conversion rate: 1 USD = {USD_TO_INR_RATE} INR
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card/50">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Growth Over Time</CardTitle>
           <CardDescription>
            The chart below illustrates the exponential growth of your investment.
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
                    formatter={(value) => formatCurrency(value as number)}
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
              <Area type="monotone" dataKey="value" stroke="var(--color-value)" strokeWidth={2} fill="url(#fillValue)" />
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
                const totalReturn = (baseEndingValue / initialInvestment - 1) * 100;
                
                return (
                  <TableRow key={year}>
                    <TableCell className="font-medium">{year}</TableCell>
                    <TableCell>{formatCurrency(startingValue)}</TableCell>
                    <TableCell>{formatCurrency(endingValue)}</TableCell>
                    <TableCell className="text-right text-green-400">+{formatCurrency(yearlyGain)}</TableCell>
                    <TableCell className="text-right">{totalReturn.toFixed(2)}%</TableCell>
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
