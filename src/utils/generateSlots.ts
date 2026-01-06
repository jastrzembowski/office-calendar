export const generateSlots = (date: Date) => {
    const slots = [];
    const startHour = 9;
    const endHour = 15;
    const endMinute = 30;
    let current = new Date(date);
    current.setHours(startHour, 0, 0, 0);

    const end = new Date(date);
    end.setHours(endHour, endMinute, 0, 0);

    let slotId = 0;
    while (current <= end) {
        const h = current.getHours().toString().padStart(2, '0');
        const m = current.getMinutes().toString().padStart(2, '0');
        slots.push({
            id: slotId.toString(),
            startTime: `${h}:${m}`,
        });
        slotId++;
        current = new Date(current.getTime() + 30 * 60000);
    }
    return slots;
};