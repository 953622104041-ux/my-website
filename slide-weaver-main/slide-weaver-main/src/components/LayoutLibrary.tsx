import { layouts } from '@/data/layouts';
import { LayoutType } from '@/types/presentation';
import { 
  LayoutTemplate, 
  ListOrdered, 
  SplitSquareHorizontal, 
  ImageIcon, 
  FileText, 
  CheckSquare, 
  Columns, 
  Clock, 
  Table, 
  MessageCircleQuestion 
} from 'lucide-react';

const getLayoutIcon = (layoutId: LayoutType) => {
  const iconMap: Record<LayoutType, React.ReactNode> = {
    'title-hero': <LayoutTemplate className="w-5 h-5" />,
    'agenda-numbered': <ListOrdered className="w-5 h-5" />,
    'agenda-split': <SplitSquareHorizontal className="w-5 h-5" />,
    'section-title': <ImageIcon className="w-5 h-5" />,
    'content-image': <FileText className="w-5 h-5" />,
    'executive-summary': <FileText className="w-5 h-5" />,
    'timeline-facts': <Clock className="w-5 h-5" />,
    'dos-donts-list': <CheckSquare className="w-5 h-5" />,
    'dos-donts-comparison': <Columns className="w-5 h-5" />,
    'two-column-cards': <Columns className="w-5 h-5" />,
    'deep-dive': <FileText className="w-5 h-5" />,
    'conclusion-timeline': <Clock className="w-5 h-5" />,
    'summary-bullets': <ListOrdered className="w-5 h-5" />,
    'table-layout': <Table className="w-5 h-5" />,
    'qna-final': <MessageCircleQuestion className="w-5 h-5" />,
  };
  return iconMap[layoutId] || <LayoutTemplate className="w-5 h-5" />;
};

interface LayoutLibraryProps {
  onSelect?: (layoutId: LayoutType) => void;
  selectedLayout?: LayoutType;
  compact?: boolean;
}

export const LayoutLibrary = ({ onSelect, selectedLayout, compact = false }: LayoutLibraryProps) => {
  if (compact) {
    return (
      <div className="grid grid-cols-3 gap-2">
        {layouts.map((layout) => (
          <button
            key={layout.id}
            onClick={() => onSelect?.(layout.id)}
            className={`p-3 rounded-lg border transition-all text-left ${
              selectedLayout === layout.id
                ? 'border-primary bg-primary/10'
                : 'border-border bg-card hover:border-primary/50 hover:bg-secondary/50'
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="text-primary">{getLayoutIcon(layout.id)}</span>
            </div>
            <p className="text-xs font-medium text-foreground truncate">{layout.name}</p>
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-foreground">Available Layouts</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {layouts.map((layout) => (
          <div
            key={layout.id}
            className="group p-4 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-card transition-all cursor-pointer"
            onClick={() => onSelect?.(layout.id)}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {getLayoutIcon(layout.id)}
              </div>
              <h4 className="font-medium text-foreground">{layout.name}</h4>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {layout.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LayoutLibrary;
