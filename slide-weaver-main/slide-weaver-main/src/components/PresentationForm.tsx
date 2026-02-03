import { useState } from 'react';
import { PresentationInput } from '@/types/presentation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sparkles, ArrowRight, Users, BookOpen, Zap } from 'lucide-react';

interface PresentationFormProps {
  onSubmit: (input: PresentationInput) => void;
  isLoading?: boolean;
}

export const PresentationForm = ({ onSubmit, isLoading }: PresentationFormProps) => {
  const [formData, setFormData] = useState<PresentationInput>({
    topic: '',
    audience: '',
    slideCount: 8,
    tone: 'professional',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.topic.trim()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="topic" className="flex items-center gap-2 text-sm font-medium">
          <BookOpen className="w-4 h-4 text-primary" />
          Presentation Topic
        </Label>
        <Textarea
          id="topic"
          placeholder="E.g., Introduction to Digital Marketing Strategies for Small Businesses"
          value={formData.topic}
          onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
          className="min-h-[100px] resize-none bg-card border-border focus:ring-primary"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="audience" className="flex items-center gap-2 text-sm font-medium">
          <Users className="w-4 h-4 text-primary" />
          Target Audience
        </Label>
        <Input
          id="audience"
          placeholder="E.g., Marketing professionals, Small business owners, Students"
          value={formData.audience}
          onChange={(e) => setFormData({ ...formData, audience: e.target.value })}
          className="bg-card border-border focus:ring-primary"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="slideCount" className="text-sm font-medium">
            Number of Slides
          </Label>
          <Select
            value={formData.slideCount.toString()}
            onValueChange={(value) => setFormData({ ...formData, slideCount: parseInt(value) })}
          >
            <SelectTrigger className="bg-card border-border">
              <SelectValue placeholder="Select slides" />
            </SelectTrigger>
            <SelectContent>
              {[5, 6, 7, 8, 10, 12, 15].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num} slides
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="tone" className="flex items-center gap-2 text-sm font-medium">
            <Zap className="w-4 h-4 text-primary" />
            Tone
          </Label>
          <Select
            value={formData.tone}
            onValueChange={(value: 'simple' | 'professional' | 'student-friendly') => 
              setFormData({ ...formData, tone: value })
            }
          >
            <SelectTrigger className="bg-card border-border">
              <SelectValue placeholder="Select tone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="simple">Simple</SelectItem>
              <SelectItem value="professional">Professional</SelectItem>
              <SelectItem value="student-friendly">Student-friendly</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button 
        type="submit" 
        className="w-full h-12 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
        disabled={isLoading || !formData.topic.trim()}
      >
        {isLoading ? (
          <>
            <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
            Generating Presentation...
          </>
        ) : (
          <>
            <Sparkles className="w-5 h-5" />
            Generate Presentation
            <ArrowRight className="w-5 h-5" />
          </>
        )}
      </Button>
    </form>
  );
};

export default PresentationForm;
