const Announcements = () => {
  return (
    <div className="bg-background p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-muted">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="rounded-md bg-card p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium text-popover-foreground">
              Lorem ipsum dolor sit
            </h2>
            <span className="text-xs text-muted rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            expedita. Rerum, quidem facilis?
          </p>
        </div>
        <div className="rounded-md bg-card p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium text-popover-foreground">
              Lorem ipsum dolor sit
            </h2>
            <span className="text-xs text-muted rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            expedita. Rerum, quidem facilis?
          </p>
        </div>
        <div className="rounded-md bg-card p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium text-popover-foreground">
              Lorem ipsum dolor sit
            </h2>
            <span className="text-xs text-muted rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            expedita. Rerum, quidem facilis?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
