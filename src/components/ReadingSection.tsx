
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ReadingSectionProps {
  title: string;
  content: string;
}

const ReadingSection: React.FC<ReadingSectionProps> = ({ title, content }) => {
  return (
    <Card className="mb-8 border-l-4 border-indicon-navy">
      <CardHeader className="pb-2 bg-gray-50">
        <CardTitle className="text-xl font-semibold text-indicon-navy">{title}</CardTitle>
      </CardHeader>
      <CardContent className="reading-section">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </CardContent>
    </Card>
  );
};

export default ReadingSection;
