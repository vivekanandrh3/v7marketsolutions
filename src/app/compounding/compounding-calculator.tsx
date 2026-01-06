'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
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

export function CompoundingCalculator() {
  const [initialInvestment, setInitialInvestment] = useState<number>(10000);
  const [monthlyRate] = useState<number>(0.02); // 2%
  const [years] = useState<number>(5);

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

  const chartConfig = {
    value: {
      label: "Portfolio Value",
      color: "hsl(var(--primary))",
    },
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
        <CardContent>
          <div className="max-w-sm space-y-2">
            <Label htmlFor="initial-investment">Initial Investment ($)</Label>
            <Input
              id="initial-investment"
              type="number"
              value={initialInvestment}
              onChange={(e) => setInitialInvestment(Number(e.target.value))}
              placeholder="e.g., 10000"
            />
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
              data={compoundingData}
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
                tickFormatter={(value) => `$${(value / 1000)}k`}
               />
              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent 
                    labelFormatter={(label) => `Month ${label}`}
                    formatter={(value, name) => (`$${(value as number).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`)}
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
                const startingValue = startOfMonth === 0 ? initialInvestment : compoundingData[startOfMonth - 1].value;
                const endingValue = compoundingData[endOfMonth].value;
                const yearlyGain = endingValue - startingValue;
                const totalReturn = (endingValue / initialInvestment - 1) * 100;
                
                return (
                  <TableRow key={year}>
                    <TableCell className="font-medium">{year}</TableCell>
                    <TableCell>${startingValue.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</TableCell>
                    <TableCell>${endingValue.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</TableCell>
                    <TableCell className="text-right text-green-400">+${yearlyGain.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</TableCell>
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
