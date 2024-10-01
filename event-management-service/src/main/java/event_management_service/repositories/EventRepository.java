package event_management_service.repositories;

import event_management_service.entities.EventEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface EventRepository extends MongoRepository<EventEntity, Long> {}
